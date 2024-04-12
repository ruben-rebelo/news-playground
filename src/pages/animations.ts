const container = {
    hidden: {opacity: 1, scale: 0},
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: {y: 20, opacity: 0},
    visible: {
        y: 0,
        opacity: 1,
    },
};

const buttonWhileHover = {
    zIndex: 1,
    scale: 1.1,
    transition: {
        duration: 0.2,
    },
};

const Animations = {
    container,
    item,
    buttonWhileHover,
};

export default Animations;
