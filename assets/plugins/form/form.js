// Contact Form Scripts
$(function () {
    "use strict";
    $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
        preventSubmit: !0,
        submitError: function (a, t, e) { },
        submitSuccess: function (a, t) {
            t.preventDefault();
            var e = $("input#name").val(),
                i = $("input#email").val(),
                n = $("input#phone").val(),
                r = $("textarea#message").val(),
                data = {
                    name: e,
                    phone: n,
                    email: i,
                    message: r
                };
            Email.send({
                SecureToken: "80586b99-b2d1-4eb1-8b4b-cef2b145c61f",
                From: "FuncCloud <noreply@funccloud.com>", // Verified Sender 
                To: "felipe@funccloud.com",
                Subject: 'Form Contato Site',
                Body: JSON.stringify(data, null, '\t')
            }).then((msg) => {
                console.log(msg)
                if (msg === "OK") {
                    $("#success").html("<div class='alert alert-success'>"), $("#success > .alert-success").html("<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span>").append("</button>"), $("#success > .alert-success").append("<strong>Menssagem enviada com sucesso. </strong>"), $("#success > .alert-success").append("</div>"), $("#contactForm").trigger("reset")
                } else {
                    $("#success").html("<div class='alert alert-danger'>"), $("#success > .alert-danger").html("<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span>").append("</button>"), $("#success > .alert-danger").append("<strong>Desculpe " + e + ", Houve um erro ao enviar a mensagem."), $("#success > .alert-danger").append("</div>"), $("#contactForm").trigger("reset")
                }
            })
        },
        filter: function () {
            return $(this).is(":visible")
        }
    }), $('a[data-toggle="tab"]').click(function (a) {
        a.preventDefault(), $(this).tab("show")
    })
}), $("#name").focus(function () {
    $("#success").html("")
}),
    function (a) {
        function t(a) {
            return new RegExp("^" + a + "$")
        }

        function e(a, t) {
            for (var e = Array.prototype.slice.call(arguments).splice(2), i = a.split("."), n = i.pop(), r = 0; r < i.length; r++) t = t[i[r]];
            return t[n].apply(this, e)
        }
        var i = [],
            n = {
                options: {
                    prependExistingHelpBlock: !1,
                    sniffHtml: !0,
                    preventSubmit: !0,
                    submitError: !1,
                    submitSuccess: !1,
                    semanticallyStrict: !1,
                    autoAdd: {
                        helpBlocks: !0
                    },
                    filter: function () {
                        return !0
                    }
                },
                methods: {
                    init: function (t) {
                        var e = a.extend(!0, {}, n);
                        e.options = a.extend(!0, e.options, t);
                        var s = this,
                            l = a.unique(s.map(function () {
                                return a(this).parents("form")[0]
                            }).toArray());
                        return a(l).bind("submit", function (t) {
                            var i = a(this),
                                n = 0,
                                r = i.find("input,textarea,select").not("[type=submit],[type=image]").filter(e.options.filter);
                            r.trigger("submit.validation").trigger("validationLostFocus.validation"), r.each(function (t, e) {
                                var i = a(e),
                                    r = i.parents(".form-group").first();
                                r.hasClass("warning") && (r.removeClass("warning").addClass("error"), n++)
                            }), r.trigger("validationLostFocus.validation"), n ? (e.options.preventSubmit && t.preventDefault(), i.addClass("error"), a.isFunction(e.options.submitError) && e.options.submitError(i, t, r.jqBootstrapValidation("collectErrors", !0))) : (i.removeClass("error"), a.isFunction(e.options.submitSuccess) && e.options.submitSuccess(i, t))
                        }), this.each(function () {
                            var t = a(this),
                                n = t.parents(".form-group").first(),
                                s = n.find(".help-block").first(),
                                l = t.parents("form").first(),
                                d = [];
                            if (!s.length && e.options.autoAdd && e.options.autoAdd.helpBlocks && (s = a('<div class="help-block" />'), n.find(".controls").append(s), i.push(s[0])), e.options.sniffHtml) {
                                var c = "";
                                if (void 0 !== t.attr("pattern") && (c = "Not in the expected format<!-- data-validation-pattern-message to override -->", t.data("validationPatternMessage") && (c = t.data("validationPatternMessage")), t.data("validationPatternMessage", c), t.data("validationPatternRegex", t.attr("pattern"))), void 0 !== t.attr("max") || void 0 !== t.attr("aria-valuemax")) {
                                    var u = void 0 !== t.attr("max") ? t.attr("max") : t.attr("aria-valuemax");
                                    c = "Too high: Maximum of '" + u + "'<!-- data-validation-max-message to override -->", t.data("validationMaxMessage") && (c = t.data("validationMaxMessage")), t.data("validationMaxMessage", c), t.data("validationMaxMax", u)
                                }
                                if (void 0 !== t.attr("min") || void 0 !== t.attr("aria-valuemin")) {
                                    var m = void 0 !== t.attr("min") ? t.attr("min") : t.attr("aria-valuemin");
                                    c = "Too low: Minimum of '" + m + "'<!-- data-validation-min-message to override -->", t.data("validationMinMessage") && (c = t.data("validationMinMessage")), t.data("validationMinMessage", c), t.data("validationMinMin", m)
                                }
                                void 0 !== t.attr("maxlength") && (c = "Too long: Maximum of '" + t.attr("maxlength") + "' characters<!-- data-validation-maxlength-message to override -->", t.data("validationMaxlengthMessage") && (c = t.data("validationMaxlengthMessage")), t.data("validationMaxlengthMessage", c), t.data("validationMaxlengthMaxlength", t.attr("maxlength"))), void 0 !== t.attr("minlength") && (c = "Too short: Minimum of '" + t.attr("minlength") + "' characters<!-- data-validation-minlength-message to override -->", t.data("validationMinlengthMessage") && (c = t.data("validationMinlengthMessage")), t.data("validationMinlengthMessage", c), t.data("validationMinlengthMinlength", t.attr("minlength"))), (void 0 !== t.attr("required") || void 0 !== t.attr("aria-required")) && (c = e.builtInValidators.required.message, t.data("validationRequiredMessage") && (c = t.data("validationRequiredMessage")), t.data("validationRequiredMessage", c)), void 0 !== t.attr("type") && "number" === t.attr("type").toLowerCase() && (c = e.builtInValidators.number.message, t.data("validationNumberMessage") && (c = t.data("validationNumberMessage")), t.data("validationNumberMessage", c)), void 0 !== t.attr("type") && "email" === t.attr("type").toLowerCase() && (c = "Not a valid email address<!-- data-validator-validemail-message to override -->", t.data("validationValidemailMessage") ? c = t.data("validationValidemailMessage") : t.data("validationEmailMessage") && (c = t.data("validationEmailMessage")), t.data("validationValidemailMessage", c)), void 0 !== t.attr("minchecked") && (c = "Not enough options checked; Minimum of '" + t.attr("minchecked") + "' required<!-- data-validation-minchecked-message to override -->", t.data("validationMincheckedMessage") && (c = t.data("validationMincheckedMessage")), t.data("validationMincheckedMessage", c), t.data("validationMincheckedMinchecked", t.attr("minchecked"))), void 0 !== t.attr("maxchecked") && (c = "Too many options checked; Maximum of '" + t.attr("maxchecked") + "' required<!-- data-validation-maxchecked-message to override -->", t.data("validationMaxcheckedMessage") && (c = t.data("validationMaxcheckedMessage")), t.data("validationMaxcheckedMessage", c), t.data("validationMaxcheckedMaxchecked", t.attr("maxchecked")))
                            }
                            void 0 !== t.data("validation") && (d = t.data("validation").split(",")), a.each(t.data(), function (a, t) {
                                var e = a.replace(/([A-Z])/g, ",$1").split(",");
                                "validation" === e[0] && e[1] && d.push(e[1])
                            });
                            var g = d,
                                v = [];
                            do a.each(d, function (a, t) {
                                d[a] = r(t)
                            }), d = a.unique(d), v = [], a.each(g, function (i, n) {
                                if (void 0 !== t.data("validation" + n + "Shortcut")) a.each(t.data("validation" + n + "Shortcut").split(","), function (a, t) {
                                    v.push(t)
                                });
                                else if (e.builtInValidators[n.toLowerCase()]) {
                                    var o = e.builtInValidators[n.toLowerCase()];
                                    "shortcut" === o.type.toLowerCase() && a.each(o.shortcut.split(","), function (a, t) {
                                        t = r(t), v.push(t), d.push(t)
                                    })
                                }
                            }), g = v; while (g.length > 0);
                            var h = {};
                            a.each(d, function (i, n) {
                                var o = t.data("validation" + n + "Message"),
                                    s = void 0 !== o,
                                    l = !1;
                                if (o = o ? o : "'" + n + "' validation failed <!-- Add attribute 'data-validation-" + n.toLowerCase() + "-message' to input to change this message -->", a.each(e.validatorTypes, function (e, i) {
                                    void 0 === h[e] && (h[e] = []), l || void 0 === t.data("validation" + n + r(i.name)) || (h[e].push(a.extend(!0, {
                                        name: r(i.name),
                                        message: o
                                    }, i.init(t, n))), l = !0)
                                }), !l && e.builtInValidators[n.toLowerCase()]) {
                                    var d = a.extend(!0, {}, e.builtInValidators[n.toLowerCase()]);
                                    s && (d.message = o);
                                    var c = d.type.toLowerCase();
                                    "shortcut" === c ? l = !0 : a.each(e.validatorTypes, function (e, i) {
                                        void 0 === h[e] && (h[e] = []), l || c !== e.toLowerCase() || (t.data("validation" + n + r(i.name), d[i.name.toLowerCase()]), h[c].push(a.extend(d, i.init(t, n))), l = !0)
                                    })
                                }
                                l || a.error("Cannot find validation info for '" + n + "'")
                            }), s.data("original-contents", s.data("original-contents") ? s.data("original-contents") : s.html()), s.data("original-role", s.data("original-role") ? s.data("original-role") : s.attr("role")), n.data("original-classes", n.data("original-clases") ? n.data("original-classes") : n.attr("class")), t.data("original-aria-invalid", t.data("original-aria-invalid") ? t.data("original-aria-invalid") : t.attr("aria-invalid")), t.bind("validation.validation", function (i, n) {
                                var r = o(t),
                                    s = [];
                                return a.each(h, function (i, o) {
                                    (r || r.length || n && n.includeEmpty || e.validatorTypes[i].blockSubmit && n && n.submitting) && a.each(o, function (a, n) {
                                        e.validatorTypes[i].validate(t, r, n) && s.push(n.message)
                                    })
                                }), s
                            }), t.bind("getValidators.validation", function () {
                                return h
                            }), t.bind("submit.validation", function () {
                                return t.triggerHandler("change.validation", {
                                    submitting: !0
                                })
                            }), t.bind(["keyup", "focus", "blur", "click", "keydown", "keypress", "change"].join(".validation ") + ".validation", function (i, r) {
                                var d = o(t),
                                    c = [];
                                n.find("input,textarea,select").each(function (e, i) {
                                    var n = c.length;
                                    if (a.each(a(i).triggerHandler("validation.validation", r), function (a, t) {
                                        c.push(t)
                                    }), c.length > n) a(i).attr("aria-invalid", "true");
                                    else {
                                        var o = t.data("original-aria-invalid");
                                        a(i).attr("aria-invalid", void 0 !== o ? o : !1)
                                    }
                                }), l.find("input,select,textarea").not(t).not('[name="' + t.attr("name") + '"]').trigger("validationLostFocus.validation"), c = a.unique(c.sort()), c.length ? (n.removeClass("success error").addClass("warning"), e.options.semanticallyStrict && 1 === c.length ? s.html(c[0] + (e.options.prependExistingHelpBlock ? s.data("original-contents") : "")) : s.html('<ul role="alert"><li>' + c.join("</li><li>") + "</li></ul>" + (e.options.prependExistingHelpBlock ? s.data("original-contents") : ""))) : (n.removeClass("warning error success"), d.length > 0 && n.addClass("success"), s.html(s.data("original-contents"))), "blur" === i.type && n.removeClass("success")
                            }), t.bind("validationLostFocus.validation", function () {
                                n.removeClass("success")
                            })
                        })
                    },
                    destroy: function () {
                        return this.each(function () {
                            var t = a(this),
                                e = t.parents(".form-group").first(),
                                n = e.find(".help-block").first();
                            t.unbind(".validation"), n.html(n.data("original-contents")), e.attr("class", e.data("original-classes")), t.attr("aria-invalid", t.data("original-aria-invalid")), n.attr("role", t.data("original-role")), i.indexOf(n[0]) > -1 && n.remove()
                        })
                    },
                    collectErrors: function (t) {
                        var e = {};
                        return this.each(function (t, i) {
                            var n = a(i),
                                r = n.attr("name"),
                                o = n.triggerHandler("validation.validation", {
                                    includeEmpty: !0
                                });
                            e[r] = a.extend(!0, o, e[r])
                        }), a.each(e, function (a, t) {
                            0 === t.length && delete e[a]
                        }), e
                    },
                    hasErrors: function () {
                        var t = [];
                        return this.each(function (e, i) {
                            t = t.concat(a(i).triggerHandler("getValidators.validation") ? a(i).triggerHandler("validation.validation", {
                                submitting: !0
                            }) : [])
                        }), t.length > 0
                    },
                    override: function (t) {
                        n = a.extend(!0, n, t)
                    }
                },
                validatorTypes: {
                    callback: {
                        name: "callback",
                        init: function (a, t) {
                            return {
                                validatorName: t,
                                callback: a.data("validation" + t + "Callback"),
                                lastValue: a.val(),
                                lastValid: !0,
                                lastFinished: !0
                            }
                        },
                        validate: function (a, t, i) {
                            if (i.lastValue === t && i.lastFinished) return !i.lastValid;
                            if (i.lastFinished === !0) {
                                i.lastValue = t, i.lastValid = !0, i.lastFinished = !1;
                                var n = i,
                                    r = a;
                                e(i.callback, window, a, t, function (a) {
                                    n.lastValue === a.value && (n.lastValid = a.valid, a.message && (n.message = a.message), n.lastFinished = !0, r.data("validation" + n.validatorName + "Message", n.message), setTimeout(function () {
                                        r.trigger("change.validation")
                                    }, 1))
                                })
                            }
                            return !1
                        }
                    },
                    ajax: {
                        name: "ajax",
                        init: function (a, t) {
                            return {
                                validatorName: t,
                                url: a.data("validation" + t + "Ajax"),
                                lastValue: a.val(),
                                lastValid: !0,
                                lastFinished: !0
                            }
                        },
                        validate: function (t, e, i) {
                            return "" + i.lastValue == "" + e && i.lastFinished === !0 ? i.lastValid === !1 : (i.lastFinished === !0 && (i.lastValue = e, i.lastValid = !0, i.lastFinished = !1, a.ajax({
                                url: i.url,
                                data: "value=" + e + "&field=" + t.attr("name"),
                                dataType: "json",
                                success: function (a) {
                                    "" + i.lastValue == "" + a.value && (i.lastValid = !!a.valid, a.message && (i.message = a.message), i.lastFinished = !0, t.data("validation" + i.validatorName + "Message", i.message), setTimeout(function () {
                                        t.trigger("change.validation")
                                    }, 1))
                                },
                                failure: function () {
                                    i.lastValid = !0, i.message = "ajax call failed", i.lastFinished = !0, t.data("validation" + i.validatorName + "Message", i.message), setTimeout(function () {
                                        t.trigger("change.validation")
                                    }, 1)
                                }
                            })), !1)
                        }
                    },
                    regex: {
                        name: "regex",
                        init: function (a, e) {
                            return {
                                regex: t(a.data("validation" + e + "Regex"))
                            }
                        },
                        validate: function (a, t, e) {
                            return !e.regex.test(t) && !e.negative || e.regex.test(t) && e.negative
                        }
                    },
                    required: {
                        name: "required",
                        init: function (a, t) {
                            return {}
                        },
                        validate: function (a, t, e) {
                            return !(0 !== t.length || e.negative) || !!(t.length > 0 && e.negative)
                        },
                        blockSubmit: !0
                    },
                    match: {
                        name: "match",
                        init: function (a, t) {
                            var e = a.parents("form").first().find('[name="' + a.data("validation" + t + "Match") + '"]').first();
                            return e.bind("validation.validation", function () {
                                a.trigger("change.validation", {
                                    submitting: !0
                                })
                            }), {
                                element: e
                            }
                        },
                        validate: function (a, t, e) {
                            return t !== e.element.val() && !e.negative || t === e.element.val() && e.negative
                        },
                        blockSubmit: !0
                    },
                    max: {
                        name: "max",
                        init: function (a, t) {
                            return {
                                max: a.data("validation" + t + "Max")
                            }
                        },
                        validate: function (a, t, e) {
                            return parseFloat(t, 10) > parseFloat(e.max, 10) && !e.negative || parseFloat(t, 10) <= parseFloat(e.max, 10) && e.negative
                        }
                    },
                    min: {
                        name: "min",
                        init: function (a, t) {
                            return {
                                min: a.data("validation" + t + "Min")
                            }
                        },
                        validate: function (a, t, e) {
                            return parseFloat(t) < parseFloat(e.min) && !e.negative || parseFloat(t) >= parseFloat(e.min) && e.negative
                        }
                    },
                    maxlength: {
                        name: "maxlength",
                        init: function (a, t) {
                            return {
                                maxlength: a.data("validation" + t + "Maxlength")
                            }
                        },
                        validate: function (a, t, e) {
                            return t.length > e.maxlength && !e.negative || t.length <= e.maxlength && e.negative
                        }
                    },
                    minlength: {
                        name: "minlength",
                        init: function (a, t) {
                            return {
                                minlength: a.data("validation" + t + "Minlength")
                            }
                        },
                        validate: function (a, t, e) {
                            return t.length < e.minlength && !e.negative || t.length >= e.minlength && e.negative
                        }
                    },
                    maxchecked: {
                        name: "maxchecked",
                        init: function (a, t) {
                            var e = a.parents("form").first().find('[name="' + a.attr("name") + '"]');
                            return e.bind("click.validation", function () {
                                a.trigger("change.validation", {
                                    includeEmpty: !0
                                })
                            }), {
                                maxchecked: a.data("validation" + t + "Maxchecked"),
                                elements: e
                            }
                        },
                        validate: function (a, t, e) {
                            return e.elements.filter(":checked").length > e.maxchecked && !e.negative || e.elements.filter(":checked").length <= e.maxchecked && e.negative
                        },
                        blockSubmit: !0
                    },
                    minchecked: {
                        name: "minchecked",
                        init: function (a, t) {
                            var e = a.parents("form").first().find('[name="' + a.attr("name") + '"]');
                            return e.bind("click.validation", function () {
                                a.trigger("change.validation", {
                                    includeEmpty: !0
                                })
                            }), {
                                minchecked: a.data("validation" + t + "Minchecked"),
                                elements: e
                            }
                        },
                        validate: function (a, t, e) {
                            return e.elements.filter(":checked").length < e.minchecked && !e.negative || e.elements.filter(":checked").length >= e.minchecked && e.negative
                        },
                        blockSubmit: !0
                    }
                },
                builtInValidators: {
                    email: {
                        name: "Email",
                        type: "shortcut",
                        shortcut: "validemail"
                    },
                    validemail: {
                        name: "Validemail",
                        type: "regex",
                        regex: "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}",
                        message: "Not a valid email address<!-- data-validator-validemail-message to override -->"
                    },
                    passwordagain: {
                        name: "Passwordagain",
                        type: "match",
                        match: "password",
                        message: "Does not match the given password<!-- data-validator-paswordagain-message to override -->"
                    },
                    positive: {
                        name: "Positive",
                        type: "shortcut",
                        shortcut: "number,positivenumber"
                    },
                    negative: {
                        name: "Negative",
                        type: "shortcut",
                        shortcut: "number,negativenumber"
                    },
                    number: {
                        name: "Number",
                        type: "regex",
                        regex: "([+-]?\\d+(\\.\\d*)?([eE][+-]?[0-9]+)?)?",
                        message: "Must be a number<!-- data-validator-number-message to override -->"
                    },
                    integer: {
                        name: "Integer",
                        type: "regex",
                        regex: "[+-]?\\d+",
                        message: "No decimal places allowed<!-- data-validator-integer-message to override -->"
                    },
                    positivenumber: {
                        name: "Positivenumber",
                        type: "min",
                        min: 0,
                        message: "Must be a positive number<!-- data-validator-positivenumber-message to override -->"
                    },
                    negativenumber: {
                        name: "Negativenumber",
                        type: "max",
                        max: 0,
                        message: "Must be a negative number<!-- data-validator-negativenumber-message to override -->"
                    },
                    required: {
                        name: "Required",
                        type: "required",
                        message: "This is required<!-- data-validator-required-message to override -->"
                    },
                    checkone: {
                        name: "Checkone",
                        type: "minchecked",
                        minchecked: 1,
                        message: "Check at least one option<!-- data-validation-checkone-message to override -->"
                    }
                }
            },
            r = function (a) {
                return a.toLowerCase().replace(/(^|\s)([a-z])/g, function (a, t, e) {
                    return t + e.toUpperCase()
                })
            },
            o = function (t) {
                var e = t.val(),
                    i = t.attr("type");
                return "checkbox" === i && (e = t.is(":checked") ? e : ""), "radio" === i && (e = a('input[name="' + t.attr("name") + '"]:checked').length > 0 ? e : ""), e
            };
        a.fn.jqBootstrapValidation = function (t) {
            return n.methods[t] ? n.methods[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? (a.error("Method " + t + " does not exist on jQuery.jqBootstrapValidation"), null) : n.methods.init.apply(this, arguments)
        }, a.jqBootstrapValidation = function (t) {
            a(":input").not("[type=image],[type=submit]").jqBootstrapValidation.apply(this, arguments)
        }
    }(jQuery), $(function () {
        $("body").on("input propertychange", ".floating-label-form-group", function (a) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(a.target).val())
        }).on("focus", ".floating-label-form-group", function () {
            $(this).addClass("floating-label-form-group-with-focus")
        }).on("blur", ".floating-label-form-group", function () {
            $(this).removeClass("floating-label-form-group-with-focus")
        })
    });