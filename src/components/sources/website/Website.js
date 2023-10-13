import React, { useState } from "react";
import "./Website.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectChatbot } from "../../../redux/slices/chatbot/selectors";
import CustomButton from "../../shared/CustomBtn";
import { UploadedList } from "../../shared/UploadedList/UploadedList";
import { deleteWebsite, setWebsites } from "../../../redux/slices/chatbot/slice";
import axios from "axios";
import cheerio from 'cheerio';
import { CustomInput } from "../../shared/CustomInput/CustomInput";


export const Website = () => {
  const { websites } = useSelector(selectChatbot);
  const dispatch = useDispatch();

  const [crawl, setCrawl] = useState("");
  const [sitemap, setSitemap] = useState("");

  const handleDeleteWebsite = (name) => {
    debugger;
    dispatch(deleteWebsite(name));
  }



  const addCrawlLinks = (links) => {
      dispatch(setWebsites(links)); 

  };

  const handleCrawl = async () => {
    try {
      const response = await axios.get(crawl);
      const html = response.data;
      const $ = cheerio.load(html);

      const links = [];


      console.log(links);
   

      $('a').each((index, element) => {
        const link = $(element).attr('href');
        if (link) {

          if (link.startsWith('/') && !link.startsWith('/#')) {
            const fullLink = new URL(link, crawl).href;
            links.push( fullLink);
          }
        }
      });

      addCrawlLinks([...new Set(links)]);
      setCrawl('')
    } catch (error) {
     console.log(error)
    }
  };

  return (
    <div className="upload-website-wrapper border-container ">
      <div className="upload-website-container">
        <div className="crawl-content-wrapper">
          <div className="crawl-content">
            <p>Crawl</p>
            <div className={"crawl-input-block"}>
              <CustomInput
                onChange={(value) => setCrawl(value)}
                placeholder={"https://www.example.com"}
                value={crawl}
              />
              <CustomButton onClick={handleCrawl}>Fetch links</CustomButton>
            </div>
            <p>This will crawl all the links starting with the URL</p>
          </div>
        </div>
        <div className="sitemap-content-wrapper">
          <div className="sitemap-content">
            <p className="or">OR</p>
            <p>Submit sitemap</p>
            <div className="sitemap-input-block">
              <CustomInput
                onChange={(value) => setSitemap(value)}
                placeholder={"https://www.example.com/sitemap.xml"}
                value={sitemap}
              />
              <CustomButton onClick={() => {}}>Load sitemap</CustomButton>
            </div>
          </div>
        </div>
        <UploadedList
          list={websites}
          onDeleteIconClick={(w) => handleDeleteWebsite(w)}
          type={"link"}
          isEditable={true}
          title={"Included links"}
        />
      </div>
    </div>
  );
};
