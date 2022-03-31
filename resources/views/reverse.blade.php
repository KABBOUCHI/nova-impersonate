<style>
    @media print {
        .noprint {
            display: none;
        }
    }
</style>
<div class="noprint" id="reverse-impersonate-container" data-position="0" style="
     position: fixed;
     padding: 15px 20px 15px 15px;
     min-width: 160px;
     top: 25%;
     right: -5px;
     color: black;
     background-color: #fff;
    -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .05);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .05);
    border-radius: .5rem;
    text-align: center;
    z-index: 9999;
    user-select: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    "
>
    @if(config('nova-impersonate.hide_panel'))
        <div class="float-left" id="reverse-impersonate-container-hide-show-button" data-position="0"
             style="
         height: 100%;
         padding: 10px 8px;
         margin-right: 10px;
         font-weight: bold;
         font-size: 25px;
">
            >
        </div>
    @endif
    <div class="float-right">
        <p>
            @if(method_exists(auth($impersonatorGuardName)->user(), 'impersonateName'))
                {{ __('Impersonating as') }} {{ auth($impersonatorGuardName)->user()->impersonateName() }}
            @elseif( auth($impersonatorGuardName)->user()->name )
                {{ __('Impersonating as') }} {{ auth($impersonatorGuardName)->user()->name }}
            @endif
        </p>

        <a href="{{ route('nova.impersonate.leave') }}"
           style="text-decoration:underline;color: black;font-weight: bold">
            {{ __('Reverse impersonate!') }}
        </a>
    </div>
</div>
<script>
    document.addEventListener('DOMContentLoaded', function () {
        function reverseImpersonateContainerOnDblclick(event) {
            var attribute = 'data-position',
                position = !parseInt(event.target.getAttribute(attribute));

            event.target.setAttribute(attribute, +position);
            event.target.style.top = position
                ? '75%'
                : '25%';
        }

        let container = document.getElementById('reverse-impersonate-container');
        container.addEventListener('dblclick', reverseImpersonateContainerOnDblclick)

        @if(config('nova-impersonate.hide_panel'))
        function showHideContainer(event) {
            let attribute = 'data-position',
                position = !parseInt(event.target.getAttribute(attribute));

            let container = document.getElementById('reverse-impersonate-container');
            event.target.setAttribute(attribute, +position);
            event.target.innerHTML = position
                ? '<'
                : '>';
            container.style.right = position
                ? 50 - container.offsetWidth + 'px'
                : '-5px';
        }

        let button = document.getElementById('reverse-impersonate-container-hide-show-button');
        button.addEventListener('click', showHideContainer);
        button.click();
        @endif
    });
</script>
