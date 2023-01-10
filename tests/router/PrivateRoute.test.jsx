import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { AuthContext } from '../../src/auth';
import { PrivateRouter } from '../../src/router/PrivateRoute';

describe('Pruebas en <PrivateRouter />', () => {

    test('Debe mostrar el children si no esta autenticado', () => {

        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: {
                name: 'Juan'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>\
                <MemoryRouter initialEntries={['/marvel']}>
                    <PrivateRouter>
                        <h1>Ruta Privada</h1>
                    </PrivateRouter>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Ruta Privada') ).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalled();

    });

});