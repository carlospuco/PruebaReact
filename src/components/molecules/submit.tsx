import React, { useState } from "react";
import { Button } from "../atoms/button/button";
import { Grid } from "../atoms/grid/grid";
import { Layer } from "../atoms/layer/layer";
import { Text } from "../atoms/text/text";
import "./submit.scss";

interface SubmitProps {
  gifList: string[],
  setGifList: React.Dispatch<React.SetStateAction<string[]>>,
}

export const Submit = ({gifList, setGifList}: SubmitProps) => {

  const [url, setUrl] = useState('');

  return (
    <form >
        <Text/>
        <br/>
        <Layer url={url} setUrl={setUrl}/>
        <Button gifList={gifList} setGifList={setGifList} url={url}/>
        <div>
            <Grid gifList={gifList}/>
        </div>
    </form>
  );
};
