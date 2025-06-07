/* eslint-disable @next/next/no-img-element */
import SiteConfig from "@/content/site-config";
import { arrayBufferToBase64 } from "@/lib/utils";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const roboto400 = await fetch(
    new URL("/fonts/Roboto-Regular.ttf", request.url),
  ).then((res) => res.arrayBuffer());

  const roboto800 = await fetch(
    new URL("/fonts/Roboto-Bold.ttf", request.url),
  ).then((res) => res.arrayBuffer());

  const heroData = await fetch(
    new URL(
      SiteConfig.heroImage.split(process.env.WEBSITE_URL ?? "")[1],
      request.url,
    ),
  ).then((res) => res.arrayBuffer());

  const dottedGridData = await fetch(
    new URL("/images/og_images/dotted-grid.png", request.url),
  ).then((res) => res.arrayBuffer());

  const heroURL = arrayBufferToBase64(heroData);
  const dottedGridURL = arrayBufferToBase64(dottedGridData);

  const { searchParams } = new URL(request.url);

  const hasTitle = searchParams.has("title");
  const title = hasTitle ? searchParams.get("title") : "Title Not Found";

  const hasSubtitle = searchParams.has("subtitle");
  const subtitle = hasSubtitle
    ? searchParams.get("subtitle")
    : "Subtitle Not Found";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 60px",
          background: "radial-gradient(circle,#14161A 0%,#090A0C 100%)",
          fontFamily: "Roboto",
        }}
      >
        <div
          style={{
            height: "390px",
            width: "100%",
            display: "flex",
            gap: "40px",
          }}
        >
          {/* CONTENT CONTAINER */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              flex: 1,
              height: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "20px",
              }}
            >
              <img
                src={dottedGridURL}
                alt="Dotted Pattern"
                height={60}
                width={60}
                style={{
                  opacity: 0.3,
                }}
              ></img>
              <div
                style={{
                  flex: "1",
                  height: "1px",
                  background: "linear-gradient(to right, #151515, gray)",
                }}
              ></div>
            </div>
            <div
              style={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                justifyContent: "center",
                color: "white",
              }}
            >
              {hasTitle && (
                <h1
                  style={{
                    color: "white",
                    fontWeight: 800,
                    fontSize: "63px",
                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  {title}
                </h1>
              )}
              {hasSubtitle && (
                <h2
                  style={{
                    color: "white",
                    fontWeight: 400,
                    fontSize: "36px",
                    opacity: 0.7,
                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  {subtitle}
                </h2>
              )}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: "20px",
              }}
            >
              <div
                style={{
                  flex: "1",
                  height: "1px",
                  background: "linear-gradient(to left, #151515, gray)",
                }}
              ></div>
              <img
                src={dottedGridURL}
                alt="Dotted Pattern"
                height={60}
                width={60}
                style={{
                  opacity: 0.3,
                }}
              ></img>
            </div>
          </div>

          {/* IMAGE */}
          <img
            src={heroURL}
            alt="Hero Image"
            style={{
              width: "390px",
              background: "red",
              borderRadius: "25px",
            }}
          ></img>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Roboto",
          data: roboto400,
          style: "normal",
          weight: 400,
        },
        {
          name: "Roboto",
          data: roboto800,
          style: "normal",
          weight: 800,
        },
      ],
    },
  );
}
