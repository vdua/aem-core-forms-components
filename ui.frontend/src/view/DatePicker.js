/*******************************************************************************
 * Copyright 2022 Adobe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ******************************************************************************/

import FormField from "./FormField";
import $ from "jquery";

export default class DatePicker extends FormField {

    static NS = "cmp";
    static IS = "datepicker";
    static selectors  = {
        self: "[data-" + this.NS + '-is="' + this.IS + '"]'
    };

    constructor(params) {
        super(params);
    }

    getClass() {
        return "datepicker"
    }

    getTagName() {
        return "input";
    }

    setValue(value) {
        $(this.element).find("input[type=date]").val(value);
    }
}

