export const fadeInAnimationVariants = {
	initial: {
		opacity: 0,
	},
	animate: (index: number) => ({
		opacity: 1,
		transition: {
			delay: 0.1 * index,
		},
	}),
};
export const fadeInAnimationVariantsEl = {
	initial: {
		opacity: 0,
        y: 100
	},
	animate: {
		opacity: 1,
        y: 0,
		transition: {
			delay: 0.3,
		},
	},
};
