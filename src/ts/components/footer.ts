import $ from "jquery";

export class Footer{
    fb: JQuery<HTMLElement>
    constructor(){
        this.fb = $('.pictures__social-window');
        this.fbPluginReload()
    }
    fbPluginReload(){



        window.addEventListener('resize', () => {
            // const plugin = this.fb.html()
            
            // this.fb.html('');

            // plugin.replace(/width=\d+/, 'width=300');

            // this.fb.html(plugin)
        });
    }
}
