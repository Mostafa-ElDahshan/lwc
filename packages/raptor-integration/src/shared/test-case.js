import { Element } from 'engine';

export default class TestCase extends Element {
    @api issueId;
    @api issueTitle = '';
    @api playgroundId;

    get playgroundHref() {
        return `http://playground.sfdc.es/projects/${this.playgroundId}/edit`;
    }

    get headerStyle() {
        return 'font-size:0.8em;margin:0;text-align:right;position:fixed;left:0;right:0;bottom:0;z-index:1;padding-right:10px;border-top:1px solid #000';
    }

    get fullTitle() {
        return `Issue ${this.issueId}: ${this.issueTitle}`;
    }

    get issueHref() {
        return `https://git.soma.salesforce.com/raptor/raptor/issues/${this.issueId}`;
    }

    get headerStyle() {
        return 'font-size:0.8em;margin:0;text-align:right;position:fixed;left:0;right:0;bottom:0;z-index:1;padding-right:10px;border-top:1px solid #000';
    }

    get hasPlaygroundHref() {
        return !!this.playgroundId;
    }
}