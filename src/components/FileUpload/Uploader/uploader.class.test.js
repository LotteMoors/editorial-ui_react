import { UPLOAD_OPTIONS_DEFAULT } from '../FileUpload.const';

import { Uploader } from './uploader.class';

describe('Uploader', () => {
	it('should have default options', () => {
		const uploader = new Uploader();
		expect(uploader.options).toEqual(UPLOAD_OPTIONS_DEFAULT);
	});

	it('should merge custom options with default options', () => {
		const options = {
			maxFileSize: 2000,
		};

		const uploader = new Uploader(options);
		const result = {
			...UPLOAD_OPTIONS_DEFAULT,
			...options,
		};
		expect(uploader.options).toEqual(result);
	});

	it('should validate file type', () => {
		let result;
		let f;
		const date = new Date();
		const uploader = new Uploader({
			allowedFileTypes: ['jpg'],
		});

		f = new File([''], 'filename.txt', { type: 'text/plain', lastModified: date.getTime() });
		result = uploader.validateFiles([f]);
		expect(result.validFiles.length).toEqual(0);
		expect(result.invalidFiles.length).toEqual(1);

		f = new File([''], 'filename.jpg', { type: 'image/jpeg', lastModified: date.getTime() });
		result = uploader.validateFiles([f]);
		expect(result.validFiles.length).toEqual(1);
		expect(result.invalidFiles.length).toEqual(0);
	});

	it('should validate mime type', () => {
		let result;
		let f;
		const date = new Date();
		const uploader = new Uploader({
			allowedMimeTypes: ['image/jpeg'],
		});

		f = new File([''], 'filename.txt', { type: 'text/plain', lastModified: date.getTime() });
		result = uploader.validateFiles([f]);
		expect(result.validFiles.length).toEqual(0);
		expect(result.invalidFiles.length).toEqual(1);

		f = new File([''], 'filename.jpg', { type: 'image/jpeg', lastModified: date.getTime() });
		result = uploader.validateFiles([f]);
		expect(result.validFiles.length).toEqual(1);
		expect(result.invalidFiles.length).toEqual(0);
	});

	it('should validate max file size', () => {
		let result;
		let f;
		const date = new Date();
		const uploader = new Uploader({
			maxFileSize: 2,
		});

		f = new File(['takesomespace'], 'filename.txt', { type: 'text/plain', lastModified: date.getTime() });
		result = uploader.validateFiles([f]);
		expect(result.validFiles.length).toEqual(0);
		expect(result.invalidFiles.length).toEqual(1);

		f = new File(['a'], 'filename.jpg', { type: 'image/jpeg', lastModified: date.getTime() });
		result = uploader.validateFiles([f]);
		expect(result.validFiles.length).toEqual(1);
		expect(result.invalidFiles.length).toEqual(0);
	});

	it('should throw an error if no upload url is defined', () => {
		const date = new Date();
		const uploader = new Uploader({
			maxFileSize: 2,
		});

		const f = new File(['takesomespace'], 'filename.txt', { type: 'text/plain', lastModified: date.getTime() });
		expect(() => {
			uploader.uploadFiles([f]);
		}).toThrow(Error('Define the upload url.'));
	});
});
