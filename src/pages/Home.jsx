 import Veggie from "../components/Veggie";
 import Popular from "../components/Popular";
 import { motion } from "framer-motion";

 import React from "react";

function Home() {
    return (
        <motion 
            animate={{ opacity: 1 }}
            initial={{opacity: 0 }}
            exit={{oppacity: 1}}
            transittion={{duration: 0.5}}
        >
            <Veggie />
            <Popular />
        </motion>
    );
}
export default Home;