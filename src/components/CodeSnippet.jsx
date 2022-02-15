import React, { useEffect, useState } from "react";
import { codes } from "../service/CodeService";
import {
  codeIcon,
  downIcon,
  searchIcon,
  terminalIcon,
  upIcon,
} from "../service/IconService";

const CodeSnippet = ({ key, title, tags, code }) => {
  const [show, setShow] = useState(false);
  const [ikey, setIkey] = useState("");
  const [search, setSearch] = useState("");
  const [alldata, setAlldata] = useState([]);
  useEffect(() => {
    setAlldata(
      search === ""
        ? codes
        : codes.filter((x) =>
            x.title.toLowerCase().includes(search.toLowerCase())
          )
    );
  }, [search]);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div className="container search-box">
        <i className={searchIcon}></i>
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleSearch}
        />
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3">
        {alldata.map((data) => (
          <div key={data[key]} className="col mb-4">
            <div className="card code-box">
              <div className="card-body size-of-card">
                <div className="title-icon">
                  <i className={codeIcon}></i>
                </div>
                <h4 className="px-4 text-primary">
                  <a href={`${data.web}`}>{data[title]}</a>
                </h4>
                <div className="container mb-3">
                  {data[tags].map((tag) => (
                    <span key={tag} className="mx-1 badge bg-warning badge-box">
                      {tag}
                    </span>
                  ))}
                </div>
                <span
                  className="text-success pointer fw-bold"
                  onClick={() => {
                    setIkey(data[key]);
                    setShow(!show);
                  }}
                >
                  <i className={terminalIcon}></i>
                  {show && data[key] === ikey ? (
                    <span className="view-option">
                      View Less <i className={downIcon}></i>
                    </span>
                  ) : (
                    <span className="view-option">
                      View More <i className={upIcon}></i>
                    </span>
                  )}
                </span>
                {show && data[key] === ikey ? (
                  <pre className="container mt-4 card-body App-header">
                    {data[code]}
                  </pre>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

CodeSnippet.defaultProps = {
  key: "key",
  title: "title",
  tags: "tags",
  code: "code",
};

export default CodeSnippet;
