import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Loader } from 'lucide-react';
import { Button } from '../ui/Button';
import { FormInput } from './FormInput';
import { useAuth } from '../../hooks/useAuth';
import { RememberMe } from './RememberMe';
import { ForgotPassword } from './ForgotPassword';

interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export function LoginForm() {
  const navigate = useNavigate();
  const { login, isLoading } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data.email, data.password);
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <FormInput
        label="Email"
        type="email"
        icon={Mail}
        placeholder="vous@exemple.com"
        {...register('email', {
          required: 'Email requis',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Email invalide'
          }
        })}
        error={errors.email?.message}
      />

      <FormInput
        label="Mot de passe"
        type="password"
        icon={Lock}
        placeholder="••••••••"
        {...register('password', {
          required: 'Mot de passe requis',
          minLength: {
            value: 6,
            message: 'Le mot de passe doit contenir au moins 6 caractères'
          }
        })}
        error={errors.password?.message}
      />

      <div className="flex items-center justify-between">
        <RememberMe register={register} />
        <ForgotPassword />
      </div>

      <Button
        type="submit"
        className="w-full flex justify-center"
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader className="w-5 h-5 animate-spin" />
        ) : (
          'Se connecter'
        )}
      </Button>

      <p className="text-center text-sm text-gray-600">
        Pas encore de compte ?{' '}
        <Link to="/register" className="font-medium text-emerald-600 hover:text-emerald-500">
          Créer un compte
        </Link>
      </p>
    </form>
  );
}