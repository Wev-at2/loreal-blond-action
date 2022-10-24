(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const Methods = {
    init() {
        Methods.inputMask();
        Methods.inputShipping();
    },

    inputMask() {
        VMasker(document.querySelector("input[name='celular']")).maskPattern("(99) 99999-9999");
        VMasker(document.querySelector("input[name='cep']")).maskPattern("99999-999");
    },

    inputShipping() {
        let valueShippingData = document.querySelector("input[name='cep']");
        if (valueShippingData) {
            valueShippingData.addEventListener('blur', ev => {
                const $this = ev.currentTarget;
                let qty = valueShippingData.value;
                if (qty.length == 9) {
                    Methods.fetchShipping();
                }
            });
        }
    },

    fetchShipping() {
        let valueShippingData = document.querySelector("input[name='cep']").value;
        if (valueShippingData && valueShippingData != '') {
            fetch(`//viacep.com.br/ws/${valueShippingData}/json/`).then(response => {
                response.json().then(data => {
                    if (data) {
                        let city = data.localidade !== undefined ? `${data.localidade}` : '';
                        let uf = data.uf !== undefined ? data.uf : '';
                        let neighborhood = data.bairro !== undefined ? `${data.bairro}` : '';
                        document.querySelector("input[name='bairro']").value = neighborhood;
                        document.querySelector("input[name='cidade']").value = city;
                        document.querySelector("input[name='uf']").value = uf;

                        document.querySelector("input[name='bairro']").readOnly = true;
                        document.querySelector("input[name='cidade']").readOnly = true;
                        document.querySelector("input[name='uf']").readOnly = true;
                    } else {
                        console.error('Failed retrieving information', data);
                    }
                });
            }).catch(err => {
                console.error('Failed retrieving information', err);
            });
        }
    }
};

window.addEventListener("DOMContentLoaded", Methods.init);

},{}]},{},[1]);
