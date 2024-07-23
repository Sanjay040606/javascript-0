var inpu1 = document.querySelector("#name")
        var inpu2 = document.querySelector("#age")
        var inpu3 = document.querySelector("#gender")
        var inpu4 = document.querySelector("#c1")
        var inpu5 = document.querySelector("#email")
        var table1 = document.querySelector("#tr1")


        function save(){
            var tr = document.createElement("tr")
            tr.innerHTML = `<th>${inpu1.value}</th><th>${inpu2.value}</th><th>${inpu3.value}</th><th>${inpu4.value}</th><th>${inpu5.value}</th><button onclick='deletevalue(event)'>delete</button>`
            table1.append(tr)
        }
        function deletevalue(event){
            event.preventDefault()
            event.target.parentElement.remove()
        }