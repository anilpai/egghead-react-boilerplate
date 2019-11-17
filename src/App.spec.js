import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('App', ()=> {
    it('renders with error', () => {
        render(<App/>)
    })
})
