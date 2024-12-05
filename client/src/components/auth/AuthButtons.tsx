import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserPlus, LogIn } from 'lucide-react';
import { Button } from '../ui/Button';

export function AuthButtons() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignup = () => {
    navigate('/register');
  };

  return (
    <div className="flex items-center space-x-3">
      <Button 
        variant="secondary" 
        size="sm"
        className="hidden md:flex items-center space-x-2"
        onClick={handleLogin}
      >
        <LogIn className="w-4 h-4" />
        <span>Se connecter</span>
      </Button>
      <Button 
        size="sm"
        className="hidden md:flex items-center space-x-2"
        onClick={handleSignup}
      >
        <UserPlus className="w-4 h-4" />
        <span>Créer un compte</span>
      </Button>
    </div>
  );
}