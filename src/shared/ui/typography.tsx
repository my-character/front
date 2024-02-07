import React from "react";


import { cn } from "@/src/shared/lib/utils";
import PropTypes from 'prop-types';

interface ITypographyProps {
	variant?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	children?: React.ReactNode;
	className?: string;
}

const variants = {
	h1: "text-4xl font-bold",
	h2: "text-3xl font-bold",
	h3: "text-2xl font-bold",
	h4: "text-xl font-bold",
	h5: "text-lg font-bold",
	h6: "text-base font-bold",
	p2: "text-xs",
	default: "text-base",
};

const Typography = ({
	variant,
	children,
	className,
	...rest
}: ITypographyProps) => {
	const Component = variant ?? "p";
	const classes = cn(
		"text-black dark:text-white",
		variants[(variant as keyof typeof variants) ?? "default"],
		className,
	);

	return (
		<Component className={classes} {...rest}>
			{children}
		</Component>
	);
};

Typography.propTypes = {
	variant: PropTypes.oneOf(["p", "h1", "h2", "h3", "h4", "h5", "h6"]),
	children: PropTypes.node,
	className: PropTypes.string,
};

export default Typography;
