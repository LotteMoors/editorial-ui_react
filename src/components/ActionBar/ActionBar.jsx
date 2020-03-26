import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import { useSlot } from '../../hooks/useSlot';

import styles from './ActionBar.module.scss';

export const ActionBarContentSection = ({ children }) => <>{children}</>;

const cx = classNames.bind(styles);

ActionBarContentSection.propTypes = {
	children: PropTypes.node,
};

const ActionBar = ({ children }) => {
	const contentSlot = useSlot(ActionBarContentSection, children);

	return (
		<div className={cx('o-action-bar')}>
			<div className="u-container">
				<div className="o-action-bar__content u-margin-top-xs u-margin-bottom-xs">
					{contentSlot}
				</div>
			</div>
		</div>
	);
};

ActionBar.propTypes = {
	children: PropTypes.node,
};

export default ActionBar;