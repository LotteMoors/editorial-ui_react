import PropTypes from 'prop-types';
import React, { useCallback, useRef, useState } from 'react';

import { Tooltip, TooltipTypeMap } from '../Tooltip';

const EllipsisWithTooltip = ({
	children,
	style,
	type,
	delayShow = 700,
}) => {
	const targetRef = useRef(null);
	const [isVisible, setVisibility] = useState(false);
	const [delayShowLoop, setDelayShowLoop] = useState(null);

	const handleMouseEnter = () => {
		setDelayShowLoop(setTimeout(() => {
			setVisibility(true);
		}, parseInt(delayShow, 10)));
	};

	const handleMouseLeave = useCallback(
		() => {
			if (delayShowLoop) {
				clearTimeout(delayShowLoop);
			}
			setVisibility(false);
		},
		[delayShowLoop],
	);

	return (
		<>
			<div
				style={style}
				className="u-text-truncate"
				ref={targetRef}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				{children}
			</div>
			<Tooltip type={type} isVisible={isVisible} targetRef={targetRef}>{children}</Tooltip>
		</>
	);
};

EllipsisWithTooltip.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
	style: PropTypes.shape(),
	type: PropTypes.oneOf([TooltipTypeMap.PRIMARY, TooltipTypeMap.SECONDARY]),
	delayShow: PropTypes.number,
};

export default EllipsisWithTooltip;
