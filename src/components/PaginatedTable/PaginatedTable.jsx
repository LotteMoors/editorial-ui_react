import { Pagination } from '@acpaas-ui/react-components';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Table from '../Table/Table';

import './PaginatedTable.scss';

const PaginatedTable = ({
	className,
	currentPage = 1,
	itemsPerPage,
	totalValues,
	onPageChange,
	...tableProps
}) => {
	const resultCount = `Resultaat (${totalValues})`;
	const showPagination = totalValues > 0 && Math.ceil(totalValues / itemsPerPage) > 0;

	return (
		<div className={classnames(className, 'o-paginated-table')}>
			<p className="o-paginated-table__count h6 u-margin-bottom">{resultCount}</p>
			<Table {...tableProps} className="o-paginated-table__table" />
			{showPagination && (
				<div className="o-paginated-table__pagination u-margin-top">
					<Pagination
						currentPage={currentPage}
						itemsPerPage={itemsPerPage}
						onUpdate={onPageChange}
						styling="m-pagination--outline"
						totalValues={totalValues}
					/>
				</div>
			)}
		</div>
	);
};

PaginatedTable.propTypes = {
	className: PropTypes.string,
	// Pagination props
	currentPage: PropTypes.number,
	itemsPerPage: PropTypes.number,
	onPageChange: PropTypes.func,
	totalValues: PropTypes.number,
	// Table props
	rows: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
	columns: PropTypes.arrayOf(PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			value: PropTypes.string,
			component: PropTypes.func,
			headerComponent: PropTypes.func,
			format: PropTypes.func,
			hidden: PropTypes.bool,
			disabled: PropTypes.bool,
			disableSorting: PropTypes.bool,
			classList: PropTypes.arrayOf(PropTypes.string),
		}),
	])),
	loading: PropTypes.bool,
	responsive: PropTypes.bool,
	hasClickAction: PropTypes.bool,
	activeSorting: PropTypes.shape({
		key: PropTypes.string,
		order: PropTypes.oneOf(['asc', 'desc']),
	}),
	noDataMessage: PropTypes.string,
	loadDataMessage: PropTypes.string,
	noColumnsMessage: PropTypes.string,
	orderBy: PropTypes.func,
	rowClicked: PropTypes.func,
	striped: PropTypes.bool,
	type: PropTypes.oneOf(['primary', 'secondary']),
};

export default PaginatedTable;
