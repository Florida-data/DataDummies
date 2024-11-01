import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";

import { useNavigate } from 'react-router-dom';
import { SearchBar } from "./SearchBar";

export function Home() {
    

    return (
        <section>
            <SearchBar />
            <hr />
            <div>
                <h4 className="h1 text-light">
                    {  `Bienvenido `  }
                </h4>
            </div>
        </section>
    );
}