import type {AppProps} from 'next/app';
import '../global.css';
import {motion} from 'framer-motion';

export default function MyApp({Component, pageProps}: AppProps) {
    return (
        <motion.div
            initial="init"
            animate="animate"
            variants={{
                init: {
                    opacity: 0,
                },
                animate: {
                    opacity: 1,
                },
            }}
        >
            <Component {...pageProps} />
        </motion.div>
    );
}
