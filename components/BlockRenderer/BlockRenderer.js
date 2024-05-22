import { Cover } from '../Core/Cover'
import { Heading } from '../Core/Heading'
import { Paragraph } from '../Core/Paragraph'
import { CallToActionButton } from '../Custom/CallToActionButton'
import { Columns } from '../Core/Columns'
import { Column } from '../Core/Column'
import { Theme } from '../../lib/theme'
import { Spacer } from '../Core/Spacer'
import { Gallery } from '../Core/Gallery'
import { Query } from '../Core/Query'
import { Group } from '../Core/Group'
import { Services } from '../Custom/Services'
import { GravityFormsComponent } from '../GravityForms/GravityFormsFields'
import { List } from '../Core/List'
import { ListItem } from '../Core/List/ListItem'
import { HeadingLabel } from '../Custom/HeadingLabel'
import { BuyingPoint } from '../Custom/BuyingPoint'
import { ImageHighlight } from '../Custom/ImageHighlight'
import { Highlights } from '../Custom/Highlights'
import { Carousel } from '../Custom/Carousel'
import { CallToActionBar } from '../Custom/CallToActionBar'
import { Tile } from '../Custom/Tile'
import { PricingBlock } from '../Custom/PricingBlock'
import { ImageText } from '../Custom/ImageText'
import { Features } from '../Custom/Features'
import { ScrollingBullets } from '../Custom/ScrollingBullets'
import { MiniCover } from '../Custom/MiniCover'
import { IDDiv } from '../Custom/IDDiv'
import mapACFRepeater from '../../lib/mapACFRepeater'
import Image from 'next/image'

export const BlockRenderer = ({ items, blocks }) => {
    console.log(blocks);
    return blocks.map(block => {
        switch (block.name) {
            // 
            case "gravityforms/form": {
                return <GravityFormsComponent formId={block.attributes.formId}></GravityFormsComponent>
            }

            // "List" Component in Gutenberg Page Builder
            case "core/list": {
                return <List key={block.id}>
                    <BlockRenderer blocks={block.innerBlocks}></BlockRenderer>
                </List>
            }

            // Nested item in list component
            case "core/list-item": {
                return <ListItem key={block.id} content={block.originalContent}></ListItem>
            }

            // Draggable Footer
            // case "acf/footer": {
            //     return <Footer items={items} data={block.attributes.data}></Footer>
            // }

            // Custom Call to Action Button
            case "acf/ctabutton": {
                return <CallToActionButton
                    key={block.id}
                    buttonLabel={block.attributes.data.label}
                    destination={block.attributes.data.destination || "/"}
                    align={block.attributes.data.align}
                    type={block.attributes.data.type}
                ></CallToActionButton>
            }

            case "acf/call-to-action-bar": {
                return <CallToActionBar
                    title={block.attributes.data.title}
                    paragraph={block.attributes.data.paragraph}
                    image={block.attributes.data.image}
                    button_text={block.attributes.data.button_text}
                    button_destination={block.attributes.data.button_destination}
                    onlineImage={block.attributes.data.online}
                >

                </CallToActionBar>
            }


            case "acf/tile": {
                console.log(block);
                return <Tile
                    title={block.attributes.data.title}
                    text={block.attributes.data.text}
                    buttonText={block.attributes.data.buttontext}
                    colour={block.attributes.data.colour}
                    textColour={block.attributes.data.textcolour}
                    buttonDestination={block.attributes.data.buttondestination}
                >
                </Tile>
            }

            
            case "acf/carousel": {
                console.log(block.attributes.data)
                return <Carousel data={mapACFRepeater(block.attributes.data)} visibleitems={parseInt(block.attributes.data.visibleitems)}></Carousel>
            }

            case "acf/features": {
                console.log(block.attributes.data)
                return <Features mainTitle={block.attributes.data.maintitle} featuresArray={mapACFRepeater(block.attributes.data)} color={block.attributes.data.color} ></Features>
            }

            case "acf/iddiv": {
                console.log(block)
                return <IDDiv id={block.attributes.data.id}></IDDiv>
            }

            case "acf/image-highlight": {
                return <ImageHighlight
                    image={block.attributes.data.image.url}
                    imageWidth={block.attributes.data.image.width}
                    imageHeight={block.attributes.data.image.height}
                    imageAlt={block.attributes.data.image.alt}
                    align={block.attributes.data.align}
                    accent={block.attributes.data.accent_title}
                    title={block.attributes.data.title}
                    paragraph={block.attributes.data.paragraph}
                    buttonText={block.attributes.data.button_text}
                    destination={block.attributes.data.button_destination}
                    text_backdrop={block.attributes.data.text_background.url}
                    text_backdropWidth={block.attributes.data.text_background.width}
                    text_backdropHeight={block.attributes.data.text_background.height}
                    text_backdropAlt={block.attributes.data.text_background.alt}
                >

                </ImageHighlight>
            }

            case "acf/services": {
                console.log(block.attributes.data)
                return <Services data={mapACFRepeater(block.attributes.data)}></Services>
            }

            case "acf/minicover": {
                console.log(block)
                return (
                    <MiniCover 
                        image={block.attributes.data.image}
                        title={block.attributes.data.title}
                        description={block.attributes.data.description}
                        showbutton={block.attributes.data.showbutton}
                        buttondestination={block.attributes.data.buttondestination}
                        buttontext={block.attributes.data.buttontext}
                        showscroll={block.attributes.data.showscrollbutton}
                        idscroll={block.attributes.data.idscroll}
                    ></MiniCover>
                )
            }

            case "acf/pricing-block": {
                console.log(block.attributes.data)
                return <PricingBlock
                    button_destination={block.attributes.data.button_destination}
                    title={block.attributes.data.title}
                    price={block.attributes.data.price}
                    description={block.attributes.data.description}
                    discount={block.attributes.data.discount}
                    button_text={block.attributes.data.button_text}
                    checklist={mapACFRepeater(block.attributes.data)}
                >

                </PricingBlock>
            }

            case "acf/image-text": {
                console.log(block.attributes.data)
                return <ImageText
                    title={block.attributes.data.title}
                    header={block.attributes.data.header}
                    description={block.attributes.data.description}
                    button_text={block.attributes.data.button_text}
                    destination={block.attributes.data.link_destination}
                    image={block.attributes.data.image}
                >

                </ImageText>
            }

            // Custom Call to Action Button (External Sites)
            case "acf/externalctabutton": {
                return <CallToActionButton
                    color={"#F1B007"}
                    key={block.id}
                    buttonLabel={block.attributes.data.label}
                    destination={block.attributes.data.destination?.url}
                    target={block.attributes.data?.destination?.target}
                    align={block.attributes.data.align}
                ></CallToActionButton>
            }

            case "acf/heading-label": {
                return <HeadingLabel
                    textAlign={block.attributes.data.align}
                    content={block.attributes.data.text}
                    color={block.attributes.data.color}
                >

                </HeadingLabel>
            }

            case "acf/scrolling-bullets": {
                return <ScrollingBullets bullets={mapACFRepeater(block.attributes.data)}>

                </ScrollingBullets>
            }

            case "acf/buying-point": {
                return <BuyingPoint
                    color={block.attributes.data?.color}
                    description={block.attributes.data.description}
                    number={block.attributes.data.number}
                ></BuyingPoint>
            }

            // Just a Div :)
            case "core/query": {
                <Query key={block.id}>
                    <BlockRenderer blocks={block.innerBlocks}></BlockRenderer>
                </Query>
            }

            case "acf/highlights": {
                console.log(block);
               return  <Highlights
                    title_heading = {block.attributes.data.title_heading}
                    title_explanation = {block.attributes.data.title_explanation}
                    checklist_descriptions = {mapACFRepeater(block.attributes.data)}
                    image_area = {block.attributes.data.image_area}
                ></Highlights>
            }

            // Gallery Component for Images Stacked ontop of Eachother
            case "core/gallery": {
                return <Gallery key={block.id} columns={block.attributes.columns || 3} cropImages={block.attributes.imageCrop} items={block.innerBlocks}></Gallery>
            }

            // Spacer that provides custom margin in-between components
            case "core/spacer": {
                return <Spacer key={block.id} height={block.attributes.height || "81px"}></Spacer>
            }

            // Paragraph component
            case "core/paragraph": {
                return <Paragraph
                    className={block.attributes.className}
                    key={block.id}
                    textAlign={block.attributes.align}
                    content={block.attributes.content}
                    fontSize={block.attributes.style?.typography?.fontSize}
                    textColor={Theme[block.attributes.textColor] || block.attributes.style?.color?.text}
                ></Paragraph>
            }

            // Fancy Heading used for dynamic page groups (posts, blogs, etc)
            case "core/post-title": {
                return <Heading
                    key={block.id}
                    textAlign={block.attributes.textAlign}
                    content={block.attributes.content}
                    level={block.attributes.level}
                />
            }

            // Page heading {H1, H2, H3, H4, H5, H6}
            case "core/heading": {
                return <Heading
                    className={block.attributes.className}
                    typography={block.attributes?.style?.typography}
                    key={block.id}
                    textColor={block.attributes?.textColor}
                    textAlign={block.attributes.textAlign}
                    content={block.attributes.content}
                    level={block.attributes.level}
                />
            }

            // Page Hero: Landing page viewport
            case "core/cover": {
                return <Cover className={block.attributes?.className} key={block.id} background={block.attributes.url}>
                    <BlockRenderer blocks={block.innerBlocks}></BlockRenderer>
                </Cover>
            }

            // Columns Component: Wrapper for all Columns
            case "core/columns": {
                return <Columns padding={block.attributes.style?.spacing?.padding} className={block.attributes?.className} key={block.id} stackOnMobile={block.attributes.isStackedOnMobile}>
                    <BlockRenderer blocks={block.innerBlocks}></BlockRenderer>
                </Columns>
            }

            // Each individual child column within columns component
            case "core/column": {
                return <Column padding={block.attributes.style?.spacing?.padding} bgColor={block.attributes.style?.color?.background} className={block.attributes?.className} layout={block.attributes?.layout || ""} verticalAlignment={block.attributes.verticalAlignment || false} key={block.id} width={block.attributes.width}>
                    <BlockRenderer blocks={block.innerBlocks}></BlockRenderer>
                </Column>
            }

            // Generic Group Component
            case "core/group": {
                return <Group
                    border={block.attributes.style?.border}
                    padding={block.attributes.style?.spacing?.padding}
                    className={block.attributes.className}
                    contentSize={block.attributes.layout?.contentSize}
                    bgColor={block.attributes?.style?.color?.background}
                    justification={block.attributes?.layout?.justifyContent}
                    radius={block.attributes?.style?.border?.radius}
                    keys={block.id}>
                    <BlockRenderer blocks={block.innerBlocks}></BlockRenderer>
                </Group>
            }

            // Block Renderer Call (Calls itself, used as an initial opening to the page generation)
            case "core/block": {
                return <BlockRenderer keys={block.id} blocks={block.innerBlocks}>
                </BlockRenderer>
            }

            // Render for ALL images on website. This is important because each image must be optimized effectively to preserve fast page speeds.
            case "core/image": {
                return (
                    <div className={``}>
                        <Image
                            key={block.id}
                            src={block.attributes.url}
                            height={block.attributes.height}
                            width={block.attributes.width}
                            alt={block.attributes.alt || ""}
                            className={block.attributes.className || ""}
                        />
                        {/*test <Lightbox
                            open={open}
                            close={() => setOpen(false)}
                            slides={[
                                { src: block.attributes.url },
                              ]}
                            
                        ></Lightbox> */}
                    </div>

                )
            }

            default: {
                console.log("UNKNOWN:", block)
                return null;
            }
        }
    })
} 