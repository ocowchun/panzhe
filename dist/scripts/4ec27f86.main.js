"use strict";$(function(){function a(a){var b,c=a.length,d="",e="/**\n",f=" */\n";d+=e;for(var g=0;7>g;g++){d+=" * ";for(var h=0;c>h;h++){var i=C[a[h]];d+=i[g]+B,h===c-1&&(d+="\n")}}return d+=f,b="//*****************************{title}*****************************",b=b.replace("{title}",a),d+=b}$("#btnGenerate").on("click",function(){var b=$("#inputFont").val(),c=a(b);$("#text").val(c)});var b=["...###...","..##.##..",".##...##.","##.....##","#########","##.....##","##.....##"],c=["#######..","##.....#.","##......#","########.","##.....#.","##......#","########."],d=["#########","##.....##","##.......","##.......","##.......","##.....##","#########"],e=["#######..","##.....##","##......#","##......#","##......#","##.....##","#######.."],f=["#########","##.......","##.......","#########","##.......","##.......","#########"],g=["#########","##.......","##.......","#########","##.......","##.......","##......."],h=[".########","##.....##","##.......","##.......","##..#####","##.....##",".########"],i=["##.....##","##.....##","##.....##","#########","##.....##","##.....##","##.....##"],j=["#########","#########","...###...","...###...","...###...","#########","#########"],k=["#########","#########",".....##..",".....##..",".....##..",".##..##..",".######.."],l=["##....##.","##...##..","##..##...","#####....","##..##...","##...##..","##....##."],m=["##.......","##.......","##.......","##.......","##.......","##.......","#########"],n=["###...###","##.#.#.##","##..#..##","##..#..##","##..#..##","##..#..##","##..#..##"],o=["###....##","####...##","##.##..##","##..##.##","##...####","##....###","##.....##"],p=["#########","##.....##","##.....##","##.....##","##.....##","##.....##","#########"],q=["########.","##.....##","##.....##","########.","##.......","##.......","##......."],r=["..####...","##....###","#......##","#......##","#..##..##","##...##..","..###..##"],s=["########.","##......#","##......#","########.","##...##..","##....##.","##.....##"],t=[".#######.","##.....##","##.......",".#######.",".......##","##.....##",".#######."],u=["#########","#########","...###...","...###...","...###...","...###...","...###..."],v=["##.....##","##.....##","##.....##","##.....##","##.....##",".##...##.","..#####.."],w=["##.....##","##.....##","##.....##","##.....##",".##...##.","..##.##..","....#...."],x=["##..#..##","##..#..##","##..#..##","##..#..##","##..#..##","##.#.#.##","###...###"],y=["##.....##",".##...##.","..##.##..","....##...","..##.##..",".##...##.","##.....##"],z=["##.....##","##.....##","##.....##","#########","...###...","...###...","...###..."],A=["#########","......##.",".....##..","....##...","..##.....",".##......","#########"],B="...",C={a:b,b:c,c:d,d:e,e:f,f:g,g:h,h:i,i:j,j:k,k:l,l:m,m:n,n:o,o:p,p:q,q:r,r:s,s:t,t:u,u:v,v:w,w:x,x:y,y:z,z:A,space:B}});