import React, { useState } from "react";

interface User {
  username: string;
  password: string;
}

const RegisterForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState("");

  const registeredUsers: User[] = JSON.parse(
    localStorage.getItem("registeredUsers") || "[]"
  );

  const handleRegister = () => {
    setError("");

    // Проверка на заполненность полей
    if (!username || !password || !confirmPassword) {
      setError("Все поля должны быть заполнены!");
      return;
    }

    // Проверка на совпадение паролей
    if (password !== confirmPassword) {
      setError("Пароли не совпадают!");
      return;
    }

    // Проверка на существующего пользователя
    const userExists = registeredUsers.some(
      (user) => user.username === username
    );
    if (userExists) {
      setError("Пользователь уже существует!");
      return;
    }

    // Регистрация пользователя
    const newUser = { username, password };
    registeredUsers.push(newUser);
    localStorage.setItem("Зарегестрирован", JSON.stringify(registeredUsers));
    setIsRegistered(true);
  };

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {isRegistered ? (
        <p>User {username} Регистрация прошла успешно! </p>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister();
          }}
        >
          <input
            type="text"
            placeholder="ИМя пользователя"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder=" введи Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="подтверди пароль"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit">Отправить</button>
        </form>
      )}
    </div>
  );
};

export default RegisterForm;
