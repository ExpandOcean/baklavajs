import { Node } from "../src/model";
import InputOption from "../src/options/InputOption.vue";
import CheckboxOption from "../src/options/CheckboxOption.vue";
import NumberOption from "../src/options/NumberOption.vue";
import SelectOption from "../src/options/SelectOption.vue";

export default class TestNode extends Node {

    public type = "TestNode";
    public name = this.type;

    constructor() {
        super();
        this.addInputInterface("Input", "boolean", InputOption);
        this.addOutputInterface("Output", "boolean");
        this.addOption("test", InputOption);
        this.addOption("Select", SelectOption, { selected: "Test1", items: ["Test1", "Test2", "Test3"] });
        this.addOption("This is a checkbox", CheckboxOption, true);
        this.addOption("Number", NumberOption);
    }

    public calculate() {
        this.getInterface("Output").value = this.getInterface("Input");
    }

}
