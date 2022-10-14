<template>
    <div class="home-div">
        <form action="">
            <input type="file">
            <button>View Result</button>
        </form>
    </div>
    </template>
    
    
    <script>

    
    export default{
        name:'home',
    

    }
    
    </script>

    <style>
        .home-div{
            margin-top: 10% ;
            margin-left: 38%;
        }
        .home-div form{
            border: 2px solid rgb(68, 89, 224);
            width: 400px;
            height: 200px;
            border-radius: 10px;
            background-color: rgb(90, 176, 203);
        }
        .home-div form input{
            margin: 30px auto;
            display: block;
        }

        .home-div form button{
            border-radius: 10px;
            border: 2px solid rgb(79, 85, 120);
            background-color: rgb(26, 71, 153);
            color: white;
            margin-top: 10px ;
            margin-left: 20%;
            width: 250px;
            font-weight: bold;
        }
        .home-div form button:hover{
            background-color: rgb(37, 115, 205);
        }
    </style>