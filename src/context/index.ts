import { stateInterface } from '../globalTypes';
import { createContext } from 'react';

export const ctx = createContext<stateInterface | null>(null);
