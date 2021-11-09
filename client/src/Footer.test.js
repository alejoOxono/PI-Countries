import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Components/Footer';

test('renders component', () => {
  
  const component = render(<Footer />);;
  component.getByText('By Alejandro Cardona') 
});
