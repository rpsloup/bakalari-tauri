import type { FormEvent } from 'react';

const LoginPage = (): JSX.Element => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="endpoint">Endpoint</label>
        <br />
        <input type="text" name="endpoint" />
        <br />
        <label htmlFor="username">Username</label>
        <br />
        <input type="text" name="username" />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" name="password" />
        <br />
        <br />
        <input type="submit" value="Sign in" />
      </form>
    </>
  );
};

export default LoginPage;
