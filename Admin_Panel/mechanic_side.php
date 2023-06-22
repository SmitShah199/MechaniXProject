<?php
// db.php
$host = 'localhost';
$db   = 'test';
$user = 'root';
$pass = '';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$opt = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];
$pdo = new PDO($dsn, $user, $pass, $opt);
?>

<?php
// login.php
require 'db.php';

if ($_POST) {
    $stmt = $pdo->prepare('SELECT * FROM admins WHERE username = ?');
    $stmt->execute([ $_POST['username'] ]);
    $admin = $stmt->fetch();

    if ($admin && password_verify($_POST['password'], $admin['password'])) {
        session_start();
        $_SESSION['admin_logged_in'] = true;
        header('Location: dashboard.php');
    } else {
        echo "Invalid username or password";
    }
}

?>

<form method="POST">
    Username: <input type="text" name="username" required><br>
    Password: <input type="password" name="password" required><br>
    <input type="submit" value="Login">
</form>

<?php
// dashboard.php
require 'db.php';
session_start();

if (!isset($_SESSION['admin_logged_in']) || !$_SESSION['admin_logged_in']) {
    header('Location: login.php');
}

$stmt = $pdo->query('SELECT * FROM users');
$users = $stmt->fetchAll();

?>

<h1>Admin Dashboard</h1>

<table>
    <tr>
        <th>ID</th>
        <th>Username</th>
        <th>Email</th>
    </tr>
    <?php foreach ($users as $user): ?>
    <tr>
        <td><?= $user['id'] ?></td>
        <td><?= $user['username'] ?></td>
        <td><?= $user['email'] ?></td>
    </tr>
    <?php endforeach; ?>
</table>

<a href="logout.php">Logout</a>

<?php
// logout.php
session_start();
session_destroy();
header('Location: login.php');
?>
