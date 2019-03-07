<style>
    @media print{
       .noprint{
           display:none;
       }
    }
</style>
<div class="noprint" style="
     position: fixed;
     padding: 15px 20px 15px 15px;
     min-width: 160px;
     top: 25%;
     right: -5px;
     background-color: #fff;
    -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .05);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .05);
    border-radius: .5rem;
    text-align: center;
    z-index: 9999;
    "
>
    <p>
        @if( auth()->user()->name )
            Impersonating as {{ auth()->user()->name }}
        @endif
    </p>

    <a href="/nova-impersonate/leave" style="text-decoration:underline;color: black;font-weight: bold">
        Reverse impersonate!
    </a>
</div>
