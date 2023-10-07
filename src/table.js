// Table.js
import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css';

function Table({ data, onToggle }) {
  return (
    <div>
    <div class="container-fluid">
      <div class="contWrap">
        <div
          id="divLoading"
          style={{
            margin: '0px',
            padding: '0px',
            position: 'fixed',
            right: '0px',
            top: '0px',
            width: '100%',
            height: '100%',
            "background-color": 'rgb(102, 102, 102)',
            "z-index": '30001',
            opacity: '0.8',
            display: 'none',
            left: '0',
          }}
          
        
          class="loader-img_booknow"
        >
          <p
            style={{position: "absolute",
              color: "White",
              top: "50%",
              left: "50%",
              transform: "translateX(-50%)",
              "text-align": "center",}}
            
          
          >
            <span style= {{"font-size": '13px'}}>Fetching Data Please Wait</span>
            <br />
            <img
              src="https://images.railyatri.in/ry_images_prod/Eclipse-1s-104px-1-1665030560.gif" alt = "Test"
            />
          </p>
        </div>
        <div class="container bg_white" >
          <div class="row">
            <div class="col-md-12" style= {{"padding-top":'20px',"padding-bottom": '15px'}}>
              <div class="table-responsive">
                <table class="table assoc_BreachInner_tbl" style={{"width":'100%',"margin-bottom": '0'}}>
                  <thead>
                    <tr>
                      <th>Route</th>
                      <th>Not Allowed</th>
                      <th>Allowed</th>
                      <th>Allowed if market breaches</th>
                      <th>Current Status of Breach</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Hyderabad-Chennai</td>
                      <td>
                        <div class="switch_btn_wraper">
                          <div class="switch_btn_list">
                            <label class="switch">
                              <input type="radio" name="route_status" class="toggle_heatmap" value="service"></input>
                              <span class="slider round"></span>
                            </label>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="switch_btn_wraper">
                          <div class="switch_btn_list">
                            <label class="switch">
                              <input type="radio" name="route_status" class="toggle_heatmap" value="service"></input>
                              <span class="slider round"></span>
                            </label>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="switch_btn_wraper">
                          <div class="switch_btn_list">
                            <label class="switch">
                              <input type="radio" name="route_status" class="toggle_heatmap" value="service"></input>
                              <span class="slider round"></span>
                            </label>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span class="status_div Yes_status">Yes</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Hyderabad-Chennai</td>
                      <td>
                        <div class="switch_btn_wraper">
                          <div class="switch_btn_list">
                            <label class="switch">
                              <input type="radio" name="route_status_1" class="toggle_heatmap" value="service"></input>
                              <span class="slider round"></span>
                            </label>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="switch_btn_wraper">
                          <div class="switch_btn_list">
                            <label class="switch">
                              <input type="radio" name="route_status_1" class="toggle_heatmap" value="service"></input>
                              <span class="slider round"></span>
                            </label>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="switch_btn_wraper">
                          <div class="switch_btn_list">
                            <label class="switch">
                              <input type="radio" name="route_status_1" class="toggle_heatmap" value="service"></input>
                              <span class="slider round"></span>
                            </label>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span class="status_div Yes_status">Yes</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Mumbai-Pune</td>
                      <td>
                        <div class="switch_btn_wraper">
                          <div class="switch_btn_list">
                            <label class="switch">
                              <input type="radio" name="route_status_2" class="toggle_heatmap" value="service"></input>
                              <span class="slider round"></span>
                            </label>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="switch_btn_wraper">
                          <div class="switch_btn_list">
                            <label class="switch">
                              <input type="radio" name="route_status_2" class="toggle_heatmap" value="service"></input>
                              <span class="slider round"></span>
                            </label>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="switch_btn_wraper">
                          <div class="switch_btn_list">
                            <label class="switch">
                              <input type="radio" name="route_status_2" class="toggle_heatmap" value="service"></input>
                              <span class="slider round"></span>
                            </label>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span class="status_div No_status">No</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Madurai-Chennai</td>
                      <td>
                        <div class="switch_btn_wraper">
                          <div class="switch_btn_list">
                            <label class="switch">
                              <input type="radio" name="route_status_3" class="toggle_heatmap" value="service"></input>
                              <span class="slider round"></span>
                            </label>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="switch_btn_wraper">
                          <div class="switch_btn_list">
                            <label class="switch">
                              <input type="radio" name="route_status_3" class="toggle_heatmap" value="service"></input>
                              <span class="slider round"></span>
                            </label>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="switch_btn_wraper">
                          <div class="switch_btn_list">
                            <label class="switch">
                              <input type="radio" name="route_status_3" class="toggle_heatmap" value="service"></input>
                              <span class="slider round"></span>
                            </label>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span class="status_div No_status">No</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
        />
        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.js"
        ></script>
        <link
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500"
          rel="stylesheet"
        />
        <link
          href="https://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/css/bootstrap-select.min.css"
        />
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/js/bootstrap-select.min.js"></script>
      </Helmet>
    </div >
    </div>
  );
}

export default Table;
