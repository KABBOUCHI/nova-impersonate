<?php

namespace KABBOUCHI\NovaImpersonate\Contracts;

interface Impersonate
{
    /**
     * @return void
     */
    public function clear();

    /**
     * @param  int  $id
     * @param  string|null  $guardName
     * @return \Illuminate\Contracts\Auth\Authenticatable
     */
    public function findUserById($id, $guardName = null);

    /**
     * @return int|null
     */
    public function getImpersonatorId();

    /**
     * @return bool
     */
    public function isImpersonating();

    /**
     * @param  \Illuminate\Contracts\Auth\Authenticatable  $from
     * @param  \Illuminate\Contracts\Auth\Authenticatable  $to
     * @param  string|null  $guardName
     * @return bool
     */
    public function take($from, $to, $guardName = null);

    /**
     * @return bool
     */
    public function leave();
}
