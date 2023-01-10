import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { AuthContext } from '../../../src/auth/context/AuthContext';
import { Navbar } from '../../../src/ui/components/NavBar';

describe('Pruebas en el <NavBar />', () => {

    const contextValue = {
        logged: true,
        user: {
            name: 'Juan'
        },
        logout: jest.fn()
    }

    beforeEach( () => jest.clearAllMocks() );

    test('Debe mostrar el nombre del usuario logeado', () => {

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Juan') ).toBeTruthy();

        // screen.debug();

    });

    test('Debe llamar el logout y navigate cuando se hace click en el boton', () => {



    });

});