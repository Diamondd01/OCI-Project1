import React from "react";
import { createRoot } from 'react-dom/client';
import 'regenerator-runtime/runtime'

import Category, {category} from './components/Category';

const root = createRoot(document.getElementById("root"));
root.render(<Category/>);