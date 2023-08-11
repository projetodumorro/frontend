import React, { useState } from 'react';

enum UserType {
  Admin = 'Admin',
  RegularUser = 'RegularUser',
  Visitor = 'Visitor',
}

const NavBar: React.FC = () => {
  const [userType, setUserType] = useState<UserType | null>(null);

  // Simulação de autenticação
  const handleLogin = (selectedUserType: UserType) => {
    setUserType(selectedUserType);
  };

  const handleLogout = () => {
    setUserType(null);
  };

  return (
    <div>
      <h1>Sistema de Renderização Condicional de Navbar</h1>

      {userType ? (
        <div>
          <Navbar userType={userType} onLogout={handleLogout} />
          <Content userType={userType} />
        </div>
      ) : (
        <div>
          <p>Faça o login:</p>
          <button onClick={() => handleLogin(UserType.Admin)}>Login como Admin</button>
          <button onClick={() => handleLogin(UserType.RegularUser)}>Login como Usuário Regular</button>
          <button onClick={() => handleLogin(UserType.Visitor)}>Login como Visitante</button>
        </div>
      )}
    </div>
  );
};

interface NavbarProps {
  userType: UserType;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ userType, onLogout }) => {
  return (
    <nav className='bg-orange-500'>
      <ul>
        <li>Home</li>
        {userType === UserType.Admin && <li>Painel de Administração</li>}
        {userType === UserType.RegularUser && <li>Minha Conta</li>}
        <li onClick={onLogout}>Sair</li>
      </ul>
    </nav>
  );
};

interface ContentProps {
  userType: UserType;
}

const Content: React.FC<ContentProps> = ({ userType }) => {
  return (
    <div>
      <h2>Bem-vindo ao nosso sistema, {userType === UserType.Visitor ? 'Visitante' : userType}!</h2>
      {/* Conteúdo específico para cada tipo de usuário */}
    </div>
  );
};

export default NavBar;
