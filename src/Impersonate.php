<?php

namespace KABBOUCHI\NovaImpersonate;

use Laravel\Nova\Fields\Field;

class Impersonate extends Field
{
	public $textAlign = 'center';

	public $component = 'impersonate-field';

	public $meta = [
		'hideText' => true
	];

	public function __construct($id = null)
	{
		parent::__construct(null, null, null);

		if ($id) {
			$this->withMeta(['id' => $id]);
		}

		$this->onlyOnIndex();

	}
}
