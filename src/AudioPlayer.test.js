import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AudioPlayer from './components/AudioPlayer';

test('renders audio player with correct title', () => {
  render(<AudioPlayer />);
  const titleElement = screen.getByText(/Our Special Song/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders audio element with correct source', () => {
  render(<AudioPlayer />);
  const audioElement = document.querySelector('audio');
  expect(audioElement).toBeInTheDocument();
  const sourceElement = audioElement.querySelector('source');
  expect(sourceElement).toHaveAttribute('src', expect.stringContaining('/audio/Chezile.mp3'));
});
