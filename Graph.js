import { VictoryLine ,VictoryLabel,VictoryGroup,VictoryCandlestick,VictoryArea } from 'victory';
import tr from "./lang.json";
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
export default function Graph() {
    /*
    STATE TRADING
    */
  
    const [buystratstop,setBuystratstop]=React.useState("pivot");
    const [listbuystratstop,setListBuystratstop]=React.useState(["R1","R2"]);
  
   const [buystrat,setBuystrat]=React.useState("pivot");
   const [listbuystrat,setListBuystrat]=React.useState(["R1","R2"]);
  
  
   const [sellstrat,setSellstrat]=React.useState("percent breakout");
   const [listsellstrat,setListSellstrat]=React.useState(["50%","40%"]);
  
   const [sellstratstop,setSellstratstop]=React.useState("percent");
   const [listsellstratstop,setListSellstratstop]=React.useState(["50%","60%"]);

 /*/////////////////////////////////////////////*/
 const t = (v)=>tr[v];
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  return (
  <VictoryGroup
       
        
  >
    <VictoryArea
data={[
{ x:1, y: 3, y0: 7 },
{ x: 5,y: 3, y0: 7 },

]}
style={{
data: { fill: "#ECECEC" }
}}
/>
  <VictoryLine
data={[
{ x: 3, y: 7 },
{ x: 1, y: 7 },
{ x: 5, y: 7 }
]}
labels={({ datum }) =>{let v=""; if(datum.x===50){v=t("graph.rangebreakout")} if(datum.x===1){v= t("graph.startachat")} return v; }}
labelComponent={<VictoryLabel renderInPortal dy={-2}/>}
/>
<VictoryLine
data={[
{ x: 1, y: 3 },
{ x: 3, y: 3 },
{ x: 5, y: 3 }
]}
labels={({ datum }) =>{let v=""; if(datum.x===50){v=t("graph.rangebreakout")} if(datum.x===1){v= t("graph.startvente")}return v; }}
labelComponent={<VictoryLabel renderInPortal dy={-1}/>}
/>
<VictoryLine
data={[
{ x: 1, y: 8 },
{ x: 3, y: 8 },
{ x: 5, y: 8 }
]}
labels={({ datum }) =>{let v=""; if(datum.x===5){v= buystrat+listbuystrat.join(",")} if(datum.x===1){v= t("graph.objachat")}return v; }}
labelComponent={<VictoryLabel renderInPortal dy={-2}/>}
style={{ data: { stroke: "#4BC41B", strokeWidth: 2, strokeLinecap: "round" } }}
/>
<VictoryLine
data={[
{ x: 1, y: 2 },
{ x: 3, y: 2 },
{ x: 5, y: 2 }
]}
labels={({ datum }) =>{let v=""; if(datum.x===5){v= sellstrat+listsellstrat.join(",")} if(datum.x===1){v= t("graph.objvente")}return v; }}
labelComponent={<VictoryLabel renderInPortal dy={-2}/>}
style={{ data: { stroke: "#4BC41B", strokeWidth: 2, strokeLinecap: "round" } }}
/>
<VictoryLine
data={[
{ x: 1, y: 6 },
{ x: 3, y: 6 },
{ x: 5, y: 6 }
]}
labels={({ datum }) =>{let v=""; if(datum.x===5){v= buystratstop+listbuystratstop.join(",")} if(datum.x===1){v= t("graph.stopachat")}return v; }}
labelComponent={<VictoryLabel renderInPortal dy={-2}/>}
style={{ data: { stroke: "#c43a31", strokeWidth: 2, strokeLinecap: "round" } }}
/>

<VictoryLine
data={[
{ x: 1, y: 4 },
{ x: 3, y: 4 },
{ x: 5, y: 4 }
]}
labels={({ datum }) =>{let v=""; if(datum.x===5){v= sellstratstop+listsellstratstop.join(",")} if(datum.x===1){v= t("graph.stopvente")}return v; }}
labelComponent={<VictoryLabel renderInPortal dy={-2}/>}
style={{ data: { stroke: "#c43a31", strokeWidth: 2, strokeLinecap: "round" } }}
/>
<VictoryCandlestick
candleColors={{ positive: "#5f5c5b", negative: "#c43a31" }}
data={[
{x: 1, open: 4, close:4.25, high: 5, low: 4},
{x: 1.2, open: 4.25, close: 4.75, high: 4.76, low: 4.25},
{x: 1.4, open: 4.75, close: 4.5, high: 5, low: 3},
{x: 1.6, open: 4.5, close: 4.75, high: 5, low: 4},
{x: 1.8, open: 4.75, close: 4.5, high: 5, low: 3}
]}
candleRatio={0.3}

/>

</VictoryGroup>)

}