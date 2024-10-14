import React from "react";
import Grid from "@mui/material/Grid2";
import { Box, Button, Typography } from "@mui/material";

const Checkout = ({ selectItem, setSelectItem, title, subTitle, special }) => {
  return (
    <>
      <Grid
        container
        size={12}
        sx={{
          margin: "40px 20px 0px",
          gap: "40px",
        }}
      >
        <Grid
          sx={{
            flexGrow: 1,
          }}
        ></Grid>
        <Grid
          sx={{
            width: "500px",
          }}
        >
          <Grid container size={12}>
            {/* header */}
            <Grid>
              <Grid
                container
                sx={{
                  gap: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Grid>
                  <Typography
                    sx={{
                      color: "#083156",
                      fontSize: "28px",
                      lineHeight: "36px",
                      textWrap: "pretty",
                      margin: "0px",
                      fontWeight: 700,
                      marginBottom: subTitle == null && "20px",
                    }}
                  >
                    {title}
                  </Typography>
                </Grid>
                {subTitle != null && (
                  <Grid>
                    <Typography
                      sx={{
                        color: "#3d4d5c",
                        fontSize: "16px",
                        lineHeight: "28px",
                        textWrap: "pretty",
                      }}
                    >
                      {subTitle}
                    </Typography>
                  </Grid>
                )}
              </Grid>
            </Grid>
            {/* first prize */}
            {special === "BEST VALUE" && (
              <Grid
                sx={{
                  width: "100%",
                }}
              >
                <Grid
                  container
                  size={12}
                  sx={{
                    border: selectItem
                      ? "4px solid #2285d0"
                      : "1px solid #dbdee1",
                    position: "relative",
                    padding: "17px",
                    margin: "10px 0px",
                    borderRadius: "6px",
                  }}
                  onClick={() => setSelectItem(true)}
                >
                  <Grid
                    sx={{
                      position: "absolute",
                      top: -0.8,
                      left: -1,
                      backgroundColor: selectItem ? "#2285d0" : "#fced99",
                      borderRadius: "4px 1px 4px ",
                      padding: "8px 16px",
                      color: selectItem ? "#fff" : "#a65d14",
                    }}
                  >
                    <Typography sx={{}}>{special}</Typography>
                  </Grid>
                  {selectItem && (
                    <Grid
                      sx={{
                        position: "absolute",
                        top: -19,
                        right: -14,
                      }}
                    >
                      <Box
                        component="img"
                        src="https://dy8n3onijof8f.cloudfront.net/static/images/wp/bdc1819674efb16fc041.svg"
                        alt="right"
                      />
                    </Grid>
                  )}
                  <Grid
                    sx={{
                      width: "100%",
                    }}
                  >
                    <Grid container size={12}>
                      <Grid
                        sx={{
                          width: "120px",
                          height: "120px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Box
                          component="img"
                          src="https://dy8n3onijof8f.cloudfront.net/static/images/wp/e64df21f23f793be6b00.svg"
                          alt="exam"
                          width="80px"
                          height="80px"
                        />
                      </Grid>
                      <Grid
                        sx={{
                          width: "210px",
                          height: "120px",
                          display: "flex",
                          alignItems: "center",
                          justifyItems: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#001836",
                            fontSize: "20px",
                            fontWeight: 700,
                          }}
                        >
                          2 tests
                        </Typography>
                      </Grid>
                      <Grid
                        sx={{
                          flexGrow: 1,
                          height: "120px",
                        }}
                      >
                        <Grid
                          container
                          size={12}
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "120px",
                          }}
                        >
                          <Grid>
                            <Grid
                              container
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Grid>
                                <Typography
                                  sx={{
                                    fontSize: "20px",
                                    color: "#001836",
                                    flexWrap: "wrap",
                                    fontWeight: 700,
                                    width: "max-content",
                                  }}
                                >
                                  $55
                                </Typography>
                              </Grid>
                              <Grid>
                                <Typography
                                  sx={{
                                    fontSize: "12px",
                                    color: "#001836",
                                    marginLeft: "4px",
                                    paddingTop: "3px",
                                    fontWeight: 600,
                                  }}
                                >
                                  EACH
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid
                            sx={{
                              textAlign: "left",
                            }}
                          >
                            <Typography
                              sx={{
                                color: "#67737e",
                                fontSize: "16px",
                                paddingTop: "4px",
                              }}
                            >
                              <span
                                style={{
                                  textDecoration: "line-through",
                                  marginRight: 3,
                                }}
                              >
                                $130
                              </span>
                              $110 total
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            )}

            {/* fast result (today only) */}
            {special !== "BEST VALUE" && (
              <Grid
                sx={{
                  width: "100%",
                }}
              >
                <Grid
                  container
                  size={12}
                  sx={{
                    border: selectItem
                      ? "4px solid #2285d0"
                      : "1px solid #dbdee1",
                    position: "relative",
                    padding: "17px",
                    margin: "10px 0px",
                    borderRadius: "6px",
                  }}
                  onClick={() => setSelectItem(true)}
                >
                  <Grid
                    sx={{
                      position: "absolute",
                      top: -0.8,
                      left: -1,
                      backgroundColor: selectItem ? "#2285d0" : "#fced99",
                      borderRadius: "4px 1px 4px ",
                      padding: "8px 16px",
                      color: selectItem ? "#fff" : "#a65d14",
                    }}
                  >
                    <Typography sx={{}}>{special}</Typography>
                  </Grid>
                  {selectItem && (
                    <Grid
                      sx={{
                        position: "absolute",
                        top: -19,
                        right: -14,
                      }}
                    >
                      <Box
                        component="img"
                        src="https://dy8n3onijof8f.cloudfront.net/static/images/wp/bdc1819674efb16fc041.svg"
                        alt="right"
                      />
                    </Grid>
                  )}
                  <Grid
                    sx={{
                      width: "100%",
                    }}
                  >
                    <Grid container size={12}>
                      <Grid
                        sx={{
                          width: "120px",
                          height: "120px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Box
                          component="img"
                          src="https://dy8n3onijof8f.cloudfront.net/static/images/wp/a004f593aca55a509bf6.svg"
                          alt="exam"
                          width="80px"
                          height="80px"
                        />
                      </Grid>
                      <Grid
                        sx={{
                          height: "120px",
                          display: "flex",
                          alignItems: "center",
                          justifyItems: "center",
                          flexGrow: 1,
                        }}
                      >
                        <Grid
                          container
                          sx={{
                            display: "flex",

                            flexDirection: "column",
                          }}
                        >
                          <Grid>
                            <Typography
                              sx={{
                                color: "#001836",
                                fontSize: "20px",
                                fontWeight: 700,
                              }}
                            >
                              Same day
                            </Typography>
                          </Grid>
                          <Grid>
                            <Typography>
                              Get your test results within 12 hours
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid
                        sx={{
                          height: "120px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "20px",
                            color: "#001836",
                            flexWrap: "wrap",
                            fontWeight: 700,
                            width: "max-content",
                          }}
                        >
                          $39
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            )}
            {/* second prize */}
            {special === "BEST VALUE" && (
              <Grid
                sx={{
                  width: "100%",
                }}
              >
                <Grid
                  container
                  size={12}
                  onClick={() => setSelectItem(false)}
                  sx={{
                    border: !selectItem
                      ? "4px solid #2285d0"
                      : "1px solid #dbdee1",
                    position: "relative",
                    padding: "17px",
                    margin: "10px 0px",
                    borderRadius: "6px",
                  }}
                >
                  {!selectItem && (
                    <Grid
                      sx={{
                        position: "absolute",
                        top: -19,
                        right: -14,
                      }}
                    >
                      <Box
                        component="img"
                        src="https://dy8n3onijof8f.cloudfront.net/static/images/wp/bdc1819674efb16fc041.svg"
                        alt="right"
                      />
                    </Grid>
                  )}
                  <Grid
                    sx={{
                      width: "100%",
                    }}
                  >
                    <Grid container size={12}>
                      <Grid
                        sx={{
                          width: "120px",
                          height: "120px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Box
                          component="img"
                          src="https://dy8n3onijof8f.cloudfront.net/static/images/wp/e64df21f23f793be6b00.svg"
                          alt="exam"
                          width="80px"
                          height="80px"
                        />
                      </Grid>
                      <Grid
                        sx={{
                          width: "210px",
                          height: "120px",
                          display: "flex",
                          alignItems: "center",
                          justifyItems: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#001836",
                            fontSize: "20px",
                            fontWeight: 700,
                          }}
                        >
                          1 tests
                        </Typography>
                      </Grid>
                      <Grid
                        sx={{
                          flexGrow: 1,
                          height: "120px",
                        }}
                      >
                        <Grid
                          container
                          size={12}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "120px",
                          }}
                        >
                          <Grid>
                            <Typography
                              sx={{
                                fontSize: "20px",
                                color: "#001836",
                                flexWrap: "wrap",
                                fontWeight: 700,
                                width: "max-content",
                              }}
                            >
                              $65
                            </Typography>
                          </Grid>
                          <Grid>
                            <Typography
                              sx={{
                                fontSize: "12px",
                                color: "#001836",
                                marginLeft: "4px",
                                paddingTop: "3px",
                                fontWeight: 600,
                              }}
                            >
                              EACH
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            )}

            {/* within two days result */}
            {special !== "BEST VALUE" && (
              <Grid
                sx={{
                  width: "100%",
                }}
              >
                <Grid
                  container
                  size={12}
                  onClick={() => setSelectItem(false)}
                  sx={{
                    border: !selectItem
                      ? "4px solid #2285d0"
                      : "1px solid #dbdee1",
                    position: "relative",
                    padding: "17px",
                    margin: "10px 0px",
                    borderRadius: "6px",
                  }}
                >
                  {!selectItem && (
                    <Grid
                      sx={{
                        position: "absolute",
                        top: -19,
                        right: -14,
                      }}
                    >
                      <Box
                        component="img"
                        src="https://dy8n3onijof8f.cloudfront.net/static/images/wp/bdc1819674efb16fc041.svg"
                        alt="right"
                      />
                    </Grid>
                  )}
                  <Grid
                    sx={{
                      width: "100%",
                    }}
                  >
                    <Grid container size={12}>
                      <Grid
                        sx={{
                          width: "120px",
                          height: "120px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Box
                          component="img"
                          src="https://dy8n3onijof8f.cloudfront.net/static/images/wp/27e9c80d3229636abc07.svg"
                          alt="exam"
                          width="80px"
                          height="80px"
                        />
                      </Grid>
                      <Grid
                        sx={{
                          width: "210px",
                          height: "120px",
                          display: "flex",
                          alignItems: "center",
                          justifyItems: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#001836",
                            fontSize: "20px",
                            fontWeight: 700,
                          }}
                        >
                          2 days
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            )}

            {/* submit */}
            <Grid
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                disableElevation
                disableRipple
                sx={{
                  borderRadius: "6px",
                  padding: "0px 24px",
                  cursor: "pointer",
                  marginTop: "30px",
                  width: "180px",
                  backgroundColor: "#3c5d87",
                  borderColor: "#fff",
                  color: "#fff",
                  height: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 700,
                    letterSpacing: ".5px",
                  }}
                >
                  Continue
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          sx={{
            flexGrow: 1,
          }}
        ></Grid>
      </Grid>
    </>
  );
};

export default Checkout;
