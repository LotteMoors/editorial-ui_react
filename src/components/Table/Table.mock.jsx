import { Button } from '@acpaas-ui/react-components';
import { action } from '@storybook/addon-actions';
import React from 'react';

export const TABLE_MOCK_COLUMNS = (onExpand = (id) => action(`Row id is ${id}`)) => ([
	{
		label: '#',
		value: 'id',
		disableSorting: true,
	},
	{
		label: 'First name',
		value: 'firstName',
	},
	{
		label: 'Last name',
		value: 'lastName',
	},
	{
		label: 'Full name',
		value: 'fullName',
		format(data, col, rowData) {
			const { firstName, lastName } = rowData;

			return `${firstName} ${lastName}`;
		},
	},
	{
		label: 'Actions',
		component: (value, rowData) => {
			const { id } = rowData;

			return <Button onClick={() => onExpand(id)} size="small">Click me!</Button>;
		},
		classList: ['is-condensed'],
		disableSorting: true,
	},
]);

export const TABLE_MOCK_ROWS = [
	{
		id: 0,
		firstName: 'Wyatt',
		lastName: 'Cooper',
	},
	{
		id: 1,
		firstName: 'Mullen',
		lastName: 'Ballard',
	},
	{
		id: 2,
		firstName: 'Sonia',
		lastName: 'Bass',
	},
	{
		id: 3,
		firstName: 'Kristen',
		lastName: 'Moore',
	},
	{
		id: 4,
		firstName: 'Moss',
		lastName: 'Bowen',
	},
	{
		id: 5,
		firstName: 'Elaine',
		lastName: 'Michael',
	},
	{
		id: 6,
		firstName: 'Jerri',
		lastName: 'Hicks',
	},
	{
		id: 7,
		firstName: 'Sharron',
		lastName: 'Castro',
	},
	{
		id: 8,
		firstName: 'Harriett',
		lastName: 'Horton',
	},
	{
		id: 9,
		firstName: 'Griffin',
		lastName: 'Navarro',
	},

];

export const TABLE_MOCK_NESTED_ROWS = [
	{
		id: 0,
		firstName: 'Wyatt',
		lastName: 'Cooper',
	},
	{
		id: 1,
		firstName: 'Mullen',
		lastName: 'Ballard',
		rows: [
			{
				id: 11,
				firstName: 'Jerri',
				lastName: 'Hicks',
			},
			{
				id: 12,
				firstName: 'Sharron',
				lastName: 'Castro',
			},
		],
	},
	{
		id: 2,
		firstName: 'Sonia',
		lastName: 'Bass',
		rows: [
			{
				id: 21,
				firstName: 'Harriett',
				lastName: 'Horton',
			},
		],
	},
	{
		id: 3,
		firstName: 'Kristen',
		lastName: 'Moore',
	},
	{
		id: 4,
		firstName: 'Moss',
		lastName: 'Bowen',
		rows: [
			{
				id: 41,
				firstName: 'Griffin',
				lastName: 'Navarro',
			},
			{
				id: 42,
				firstName: 'Lebron',
				lastName: 'James',
			},
		],
	},
	{
		id: 5,
		firstName: 'Elaine',
		lastName: 'Michael',
	},
];
