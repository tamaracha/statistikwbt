import angular from 'angular';
import mdfigcaption from 'mdfigcaption';
import deflist from 'markdown-it-deflist';
import attrs from 'markdown-it-attrs';
import footnote from 'markdown-it-footnote';
export default /*@ngInject*/class MarkdownProvider{
  constructor(markdownit){
    this.config = {
      preset: 'default',
      options: {
        html: true,
        typographer: true,
        quotes: '„“‚‘',
        breaks: true
      },
      plugins: [mdfigcaption, deflist,attrs,footnote]
    };
    this.markdownit = markdownit;
  }
  get preset(){
    return this.config.preset;
  }
  set preset(val){
    this.config.preset = val;
    return this;
  }
  get options(){
    return this.config.options;
  }
  set options(val){
    angular.extend(this.config.options, val);
    return this;
  }
  get plugins(){
    return this.config.plugins;
  }
  use(val){
    this.config.plugins.push(val);
    return this;
  }
  $get(){
    const md = this.markdownit(this.config.preset,this.config.options);
    angular.forEach(this.config.plugins,(plugin) => {
      md.use(plugin);
    });
    return md;
  }
}
