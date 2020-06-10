import React, { Component } from 'react';
import { easeCircle } from 'd3';
var d3=require("d3");
const firebase = require('firebase');

const data={
    nodes:[
        //0
        {
            title: "The Princess Diaries",
            group: 2
        },
        //1
        {
            actor: "Julie Andrews",
            group: 1
        },
        //2
        {
            actor: "Anne Hathaway",
            group: 1
        },
        //3
        {
            actor: "Hector Elizondo",
            group: 1
        },
        //4
        {
            actor: "Heather Matarazzo",
            group: 1
        },
        //index 5
        {
            title: "Les Misérables",
            group: 2
        },
        //6
        {
            actor: "Hugh Jackman,",
            group: 1
        },
        //7
        {
            actor: "Russell Crowe",
            group: 1
        },
        //8
        {
            actor: "Amanda Seyfried",
            group: 1
        },
        //index 9
        {
            title: "Logan",
            group: 2
        },
        //10
        {
            actor: "Patrick Stewart",
            group: 1
        },
        //11
        {
            actor: "Dafne Keen",
            group: 1
        },
        //12
        {
            actor: "Boyd Holbrook",
            group: 1
        },  
        //index 13
        {
            title:"Letters to Juliet",
            group: 2
        },
        //14
        {
            actor: "Marcia DeBonis",
            group: 1
        },
        //15
        {
            actor: "Gael García Bernal",
            group:1
        },
        //16
        {
            actor: "Giordano Formenti",
            group:1
        },
        //index 17
        {
            title:"Mamma Mia! Here We Go Again",
            group: 2
        },
        //18
        {
            actor: "Andy Garcia",
            group:1
        },
        //19
        {
            actor: "Celia Imrie",
            group:1
        },
        //20
        {
            actor: "Lily James",
            group:1
        },
        //index 21
        {
            title:"The Devil Wears Prada",
            group: 2
        },
        //22
        {
            actor: "Meryl Streep",
            group:1
        },
        //23
        {
            actor: "Emily Blunt",
            group:1
        },
        //24
        {
            actor: "Stanley Tucci",
            group:1
        },
        //index 25
        {
            title:"The Sound of Music",
            group: 2
        },
        //26
        {
            actor: "Christopher Plummer",
            group:1
        },
        //27
        {
            actor: "Eleanor Parker",
            group:1
        },
        //28
        {
            actor: "Richard Haydn",
            group:1
        },
        //index 29
        {
            title:"Ella Enchanted",
            group: 2
        },
        //30
        {
            actor: "Hugh Dancy",
            group:1
        },
        //31
        {
            actor: "Cary Elwes",
            group:1
        },
        //32
        {
            actor: "Aidan McArdle",
            group:1
        },
    ],
    links: [
        //the princess diaries
        {
            source: 0,
            target: 1,
            value: 1
        },
        {
            source: 0,
            target: 2,
            value: 1
           
        },
        {
            source: 0,
            target: 3,
            value: 1
           
        },
        {
            source: 0,
            target: 4,
            value: 1  
        },
        //les Miserables
        {
            source: 5,
            target: 6,
            value: 1  
        },

        {
            source: 5,
            target: 7,
            value: 1  
        },
        {
            source: 5,
            target: 8,
            value: 1
        },
        {
            source: 5,
            target: 2,
            value: 1  
        },

        //logan
        {
            source: 9,
            target: 6,
            value: 1  
        },

        {
            source: 9,
            target: 10,
            value: 1  
        },

        {
            source: 9,
            target: 11,
            value: 1  
        },

        {
            source: 9,
            target: 12,
            value: 1  
        },
        //letters to juliet
        {
            source: 13,
            target: 14,
            value: 1  
        },
        {
            source: 13,
            target: 15,
            value: 1  
        },
        {
            source: 13,
            target: 16,
            value: 1  
        },
        {
            source: 13,
            target: 8,
            value: 1  
        },
        //mamma mia! here we go again
        {
            source: 17,
            target: 18,
            value: 1  
        },
        {
            source: 17,
            target: 19,
            value: 1  
        },
        {
            source: 17,
            target: 20,
            value: 1  
        },
        {
            source: 17,
            target: 8,
            value: 1  
        },
        //the devil wear prada
        {
            source: 21,
            target: 22,
            value: 1  
        },
        {
            source: 21,
            target: 23,
            value: 1  
        },
        {
            source: 21,
            target: 24,
            value: 1  
        },
        {
            source: 21,
            target: 2,
            value: 1  
        },
        //the sound of music
        {
            source: 25,
            target: 26,
            value: 1  
        },
        {
            source: 25,
            target: 27,
            value: 1  
        },
        {
            source: 25,
            target: 28,
            value: 1  
        },
        {
            source: 25,
            target: 1,
            value: 1  
        },
        //ella enchanted
        {
            source: 29,
            target: 30,
            value: 1  
        },
        {
            source: 29,
            target: 31,
            value: 1  
        },
        {
            source: 29,
            target: 32,
            value: 1  
        },
        {
            source: 29,
            target: 2,
            value: 1  
        },
    ]
}

export class Graph extends Component {

    drag=(simulation)=> {
        function dragStarted(d){
            if(!d3.event.active) simulation.alphaTarget(0.3).restart();
            d.fx=d.x;
            d.fy=d.y;
            console.log("Started ", d)
        }

        function dragged(d){
            d.fx=d3.event.x;
            d.fy=d3.event.y;
            console.log("Continued ", d)
            d3.select('#tooltip')
                //.style('left', (d.x * 100 / 1920)  + '%')
                //.style('top', (d.y * 100 / 1080)+ '%')
                //.style('left', (d.x * 100 / 1920)  + '%')
                //.style('top', (d.y * 100 / 1080)+ '%')
                .style('left', d.x +'px' )
                .style('top', d.y+ 'px')
        }

        function dragEnded(d){
            if(!d3.event.active) simulation.alphaTarget(0);
            d.fx=null;
            d.fy=null;
            console.log("Continued ", d)

        }

        return d3.drag()
            .on("start", dragStarted)
            .on("drag", dragged)
            .on("end",dragEnded);
    }

    chart(nodes, links){
        const width=1920;
        const height=1080;

        const obj_links=links.map(d=>Object.create(d));
        const obj_nodes=nodes.map(d=>Object.create(d));

        
        d3.select('body')
            .append("div")
            .attr('id', 'tooltip')
            .attr('style', 'position: absolute; opacity: 0;');

        const svg=d3.create("svg")
            .attr("viewBox", [0,0, width, height]);
            
        const link=svg.append("g")
            .attr("stroke", "pink")
            .attr("stroke-opacity", 0.6)
            .selectAll("line")
            .data(obj_links)
            .join("line")
            .attr("stroke-width", 5);

        const radius =(node)=>{
            if(node.group==1){
                return 50;
            }
            return 100;
        }

       const simulation=d3.forceSimulation(obj_nodes)
            .force("link", d3.forceLink().links(obj_links).id(d=> {return d.index;}).distance(200))  
            .force("charge",d3.forceManyBody())
            .force("center", d3.forceCenter(width/2, height/2));


            
        var config = {
                "avatar_size" : 286
            }
            
        var defs = svg.append('svg:defs');

        defs.append("svg:pattern")
            .attr("id", "princessDiaries")
            .attr("width", 1)
            .attr("height", 1)
            .append("svg:image")
            .attr("xlink:href", 'https://m.media-amazon.com/images/M/MV5BMzcwYjEwMzEtZTZmMi00ZGFhLWJhZjItMDAzNDVkNjZmM2U5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg')
            .attr("width", config.avatar_size)
            .attr("height", config.avatar_size) 
            .attr("x", -43)
            .attr("y", -25);

        
        defs.append("svg:pattern")
            .attr("id", "lesMis")
            .attr("width", 1)
            .attr("height", 1)
            .append("svg:image")
            .attr("xlink:href", "https://m.media-amazon.com/images/M/MV5BMTQ4NDI3NDg4M15BMl5BanBnXkFtZTcwMjY5OTI1OA@@._V1_SX300.jpg")
            .attr("width", config.avatar_size+5)
            .attr("height", config.avatar_size+5) 
            .attr("x", -46)
            .attr("y", -25);

        defs.append("svg:pattern")
            .attr("id", "logan")
            .attr("width", 1)
            .attr("height", 1)
            .append("svg:image")
            .attr("xlink:href", "https://m.media-amazon.com/images/M/MV5BYzc5MTU4N2EtYTkyMi00NjdhLTg3NWEtMTY4OTEyMzJhZTAzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg")
            .attr("width", config.avatar_size+7)
            .attr("height", config.avatar_size+7) 
            .attr("x", -46)
            .attr("y", -25);


        defs.append("svg:pattern")
            .attr("id", "lettersToJuliet")
            .attr("width", 1)
            .attr("height", 1)
            .append("svg:image")
            .attr("xlink:href","https://m.media-amazon.com/images/M/MV5BMjg0OTU0NDYwNF5BMl5BanBnXkFtZTcwNzUwNTMyMw@@._V1_SX300.jpg")
            .attr("width", config.avatar_size+5)
            .attr("height", config.avatar_size+5) 
            .attr("x", -46)
            .attr("y", -25);

        defs.append("svg:pattern")
            .attr("id", "mammamia")
            .attr("width", 1)
            .attr("height", 1)
            .append("svg:image")
            .attr("xlink:href","https://m.media-amazon.com/images/M/MV5BMjEwMTM3OTI1NV5BMl5BanBnXkFtZTgwNDk5NTY0NTM@._V1_SX300.jpg")
            .attr("width", config.avatar_size+25)
            .attr("height", config.avatar_size+25) 
            .attr("x", -56)
            .attr("y", -25);

        defs.append("svg:pattern")
            .attr("id", "devil")
            .attr("width", 1)
            .attr("height", 1)
            .append("svg:image")
            .attr("xlink:href","https://m.media-amazon.com/images/M/MV5BZjQ3ZTIzOTItMGNjNC00MWRmLWJlMGEtMjJmMDM5ZDIzZGM3XkEyXkFqcGdeQXVyMTkzODUwNzk@._V1_SX300.jpg")
            .attr("width", config.avatar_size+5)
            .attr("height", config.avatar_size+5) 
            .attr("x", -46)
            .attr("y", -25);

        defs.append("svg:pattern")
            .attr("id", "music")
            .attr("width", 1)
            .attr("height", 1)
            .append("svg:image")
            .attr("xlink:href","https://m.media-amazon.com/images/M/MV5BODIxNjhkYjEtYzUyMi00YTNjLWE1YjktNjAyY2I2MWNkNmNmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg")
            .attr("width", config.avatar_size)
            .attr("height", config.avatar_size) 
            .attr("x", -43)
            .attr("y", -25);

        defs.append("svg:pattern")
            .attr("id", "ella")
            .attr("width", 1)
            .attr("height", 1)
            .append("svg:image")
            .attr("xlink:href","https://m.media-amazon.com/images/M/MV5BZGI1MjMzMWEtZDc3Ni00Y2RiLTllOGQtMTVlZjRkOGE3MGNlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg")
            .attr("width", config.avatar_size)
            .attr("height", config.avatar_size) 
            .attr("x", -43)
            .attr("y", -25);

            
        const color = (node) =>{
            if(node.group==1){
                return d3.color("white");
            }
            if(node.title=="The Princess Diaries"){
                return "url(#princessDiaries)"
            }
            if(node.title=="Les Misérables"){
                return "url(#lesMis)"
            }
            if(node.title=="Logan"){
                return "url(#logan)"
            }
            if(node.title=="Letters to Juliet"){
                return  "url(#lettersToJuliet)"
            }
            if(node.title=="Mamma Mia! Here We Go Again"){
                return "url(#mammamia)"
            }
            if(node.title=="The Devil Wears Prada"){
                return "url(#devil)"
            }
            if(node.title=="The Sound of Music"){
                return "url(#music)"
            }
            if(node.title=="Ella Enchanted"){
                return "url(#ella)"
            }
            return d3.color("pink");
            
        }

        const colorboarder=(node)=>{
            if(node.group==2){
                return "white"
            }
            return "pink"
        }

        const actorName=(node)=>{
            if(node.group==1){
                return node.actor
            }
            return
        }
        var override = false;


        simulation.on("tick",()=>{
                link
                    .attr("x1", d=>d.source.x)
                    .attr("y1", d=>d.source.y)
                    .attr("x2", d=>d.target.x)
                    .attr("y2", d=>d.target.y);
                    
                node
                    .attr("cx", d=>d.x)
                    .attr("cy", d=>d.y);
                         
            });
/*
            d3.timer(function(elapsed) {
                console.log("HEYO");
                d3.select('#tooltip')
                    .style('left', (d3.mouse(this)[0]+10) + 'px')
                    .style('top', (d3.mouse(this)[1]+10) + 'px')
            }, 500);*/

        //making my circles!!! :D
        var node=svg.append("g")
            .attr("stroke", "#fff")
            .attr("stroke-width", 4)
            .selectAll("circle").data(obj_nodes)
            .join("circle")
            .attr("r", radius)
            .style("fill", color)
            .style("stroke", colorboarder) 
            .on('mouseover', function(e) {
                d3.select("#tooltip").style('opacity', 1).text(e.actor)
            })
            .on('mouseout', function(e) {
                if (!override) {
                    d3.select("#tooltip").style('opacity', 0).text(e.actor)
                }
            }).on("mousemove", function(e) {
                d3.select('#tooltip')
                    .style('left', (d3.event.pageX+10) + 'px')
                    .style('top', (d3.event.pageY-10) + 'px')
                override =false

            }).on("mousedown", function(d) {
                override = true;
            }).on("mouseup", function(d) {
                console.log("mouseup")
                override =false
                d3.select("#tooltip").style('opacity', 0).text(d.actor)

            })


            .call(this.drag(simulation));

            //
        

        
            /*

            node.append("svg:title")
                .text(actorName)
                */
                
        
            return svg.node();
    }
    

    componentDidMount(){
       const elem=document.getElementById("mysvg");
       elem.appendChild(this.chart(data.nodes, data.links));
    }

    render() {
        return( <div id="mysvg"> 
        </div>);
    }
}

export default Graph;
