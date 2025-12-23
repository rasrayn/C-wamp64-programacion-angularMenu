import { RouterModule, Routes } from '@angular/router';
import { Carrito } from './pages/carrito/carrito';
import { Articulo } from './pages/articulo/articulo';
import { Buscar } from './pages/buscar/buscar';
import { Menu } from './pages/menu/menu';
import { Perfil } from './pages/perfil/perfil';
import { Home } from './pages/home/home';


export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "carrito",
        component: Carrito
    },
    {
        path: "articulo",
        component: Articulo
    },
    {
        path: "buscar",
        component: Buscar
    },
    {
        path: "menu/:id",
        component: Menu
    },
    {
        path: "perfil",
        component: Perfil
    }
];
