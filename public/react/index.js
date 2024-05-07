import React from "react";
import { createRoot } from 'react-dom/client';

import Category from './components/Category';

const root = createRoot(document.getElementById("root"));
root.render(<Category/>);