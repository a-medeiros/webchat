import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Home from '../src/templates/home';

it('should render title, name field, room field and a button', () => {
  render(<Home />);

  expect(screen.getByText(/Bem-vindo ao WebChat!/i)).toBeInTheDocument();
  expect(screen.getByLabelText('Nome')).toBeInTheDocument();
  expect(screen.getByLabelText('Sala')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Entrar na sala' }))
})

it('should display an error if user clicks on the button and name field is empty', async () => {
  const user = userEvent.setup();
  render(<Home />);

  const nameInput = screen.getByLabelText('Nome') as HTMLInputElement;
  const button = screen.getByRole('button', { name: 'Entrar na sala' });

  await user.click(button);

  expect(nameInput.value).toBe('');
  expect(await screen.findByText(/Escolha um nome!/i)).toBeInTheDocument();
})

it('should display an error message if user clicks on the button and has not selected a room', async () => {
  const user = userEvent.setup();
  render(<Home />);

  const select = screen.getByLabelText('Sala') as HTMLInputElement;
  const button = screen.getByRole('button', { name: 'Entrar na sala' });

  await user.click(button);

  expect(select.value).toBe('');
  expect(await screen.findByText(/Selecione uma sala!/i)).toBeInTheDocument();
})
