import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Loader } from 'lucide-react';
import { Button } from '../ui/Button';
import { FormInput } from './FormInput';
import { useAuth } from '../../hooks/useAuth';

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export function RegisterForm() {
  const navigate = useNavigate();
  const { register: registerUser, isLoading } = useAuth();
  const { register, handleSubmit, watch, formState: { errors } } = useForm<RegisterFormData>();
  const password = watch('password');

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await registerUser(data.email, data.password, data.name);
      navigate('/');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <FormInput
        label="Nom complet"
        type="text"
        icon={User}
        placeholder="John Doe"
        {...register('name', {
          required: 'Nom requis',
          minLength: {
            value: 2,
            message: 'Le nom doit contenir au moins 2 caractères'
          }
        })}
        error={errors.name?.message}
      />

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

      <FormInput
        label="Confirmer le mot de passe"
        type="password"
        icon={Lock}
        placeholder="••••••••"
        {...register('confirmPassword', {
          required: 'Veuillez confirmer votre mot de passe',
          validate: value =>
            value === password || 'Les mots de passe ne correspondent pas'
        })}
        error={errors.confirmPassword?.message}
      />

      <Button
        type="submit"
        className="w-full flex justify-center"
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader className="w-5 h-5 animate-spin" />
        ) : (
          'Créer un compte'
        )}
      </Button>

      <p className="text-center text-sm text-gray-600">
        Déjà inscrit ?{' '}
        <Link to="/login" className="font-medium text-emerald-600 hover:text-emerald-500">
          Se connecter
        </Link>
      </p>
    </form>
  );
}