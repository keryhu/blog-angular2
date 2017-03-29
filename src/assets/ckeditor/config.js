/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';

  config.toolbar = [
    ['Preview','-','Cut','Copy','Paste','PasteText', 'Undo', 'Redo','-',
      'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', 'RemoveFormat'],

    ['NumberedList', 'BulletedList','Outdent', 'Indent','Blockquote','JustifyLeft',
      'JustifyCenter','JustifyRight','JustifyBlock','-',
      'Link','Unlink','-','Image','Table','Smiley','SpecialChar'],
    '/',
    ['Styles','Format','Font','FontSize','-','TextColor','BGColor']
  ];



};
